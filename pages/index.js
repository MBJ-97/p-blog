import Head from "next/head";
import sanityClient from "../groq-client";
import MainArticle from "../components/MainArticle";
import ArticlesListing from "../components/ArticlesListing";

export default function Home({ posts, categories }) {
  return (
    <div>
      <Head>
        <title>Mahdi Beldjoudi | Blog</title>
        <meta
          name="description"
          content="Hey I am Mahdi Beldjoudi and this is my peronal blog ! 
          I write about web developement, marketing and lifestile stuff."
        />
      </Head>
      <MainArticle post={posts[0]} />
      <ArticlesListing
        categories={categories}
        firstTitle={posts[0].title}
        posts={posts}
      />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(
    `
    *[_type=="post"] | order(_createdAt desc) {
      title,
      _createdAt,
      categories,
      slug,
      mainImage {
        asset-> {
          url
        }
      }
    }
  `
  );
  const categories = await sanityClient.fetch(`
  *[_type=="category"]
  `);
  return {
    props: {
      posts,
      categories,
    },
  };
}
