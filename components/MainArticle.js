import Image from "next/image";
import Button from "./Button";
export default function MainArticle({ post }) {
  let date = post._createdAt;
  date = date.slice(0, 10);
  return (
    <>
      <div className="mb-12 items-center p-4 sm:flex sm:space-x-7">
        <div className="image w-full sm:w-1/2">
          <Image
            src={post.mainImage.asset.url}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </div>
        <div className="infos flex w-full flex-col space-y-7 sm:w-1/2">
          <h2 className="text-2xl font-semibold sm:text-4xl">{post.title}</h2>
          <small className="">{date}</small>
          <Button
            bColor="bg-gradient-to-r from-accent via-blue to-purple"
            tColor="text-white"
            text="Read Article"
            url="/posts/[slug]"
            as={`/posts/${post.slug.current}`}
          />
        </div>
      </div>
    </>
  );
}
