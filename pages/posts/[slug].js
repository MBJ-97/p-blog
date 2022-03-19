import sanityClient from "../../groq-client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function singlePost({ post, category }) {
  // formatted date
  if (!post) {
    return null;
  }

  let date = post._createdAt.slice(0, 10);

  // filtering the category of  the article
  let ref = post.categories[0]._ref;
  function filterByRef(obj) {
    let result = "";
    if (obj._id == ref) {
      return (result = obj._id);
    }
  }
  let result = category.filter(filterByRef);
  const { title } = result[0];

  return (
    <div>
      <Head>
        <title>Mahdi Beldjoudi | {post.title}</title>
      </Head>
      <div className="cover-image mb-6 max-w-5xl">
        <Image
          src={post.mainImage.asset.url}
          width={500}
          height={180}
          layout="responsive"
        ></Image>
      </div>
      <h1 className="mb-6 text-2xl font-bold sm:text-5xl">{post.title}</h1>
      <div className="details mb-10">
        <small>{date}</small>
        <span className="category ml-4 rounded-full bg-gradient-to-r from-accent via-blue to-purple px-4 py-2 opacity-80">
          {title}
        </span>
      </div>
      <div className="body prose mb-8 max-w-full dark:prose-invert">
        <PortableText value={post.body} />
      </div>
      <div className="share flex flex-col items-center justify-center">
        <h2 className="mb-4 text-xl font-bold">Share this article</h2>
        <div className="shareIcons flex space-x-5">
          <TwitterShareButton
            url={`blog.mahdibeldjoudi.xyz/posts/${post.slug.current}`}
          >
            <div className="twitter rounded-full bg-gradient-to-r from-accent via-blue to-purple py-4 px-6">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </TwitterShareButton>

          <FacebookShareButton
            url={`blog.mahdibeldjoudi.xyz/posts/${post.slug.current}`}
          >
            <div className="facebook rounded-full bg-gradient-to-r from-accent via-blue to-purple py-4 px-6">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
}

// GROQ query
const query = `
*[_type=="post" && slug.current == $slug][0]{
  title,
  _createdAt,
  body,
  slug,
  categories,
  mainImage {
    asset -> {
      url
    }
  }
}
`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const post = await sanityClient.fetch(query, { slug });
  const category = await sanityClient.fetch(`
  *[_type == "category"]
  `);
  return {
    props: {
      post,
      category,
    },
    revalidate: 10,
  };
}
