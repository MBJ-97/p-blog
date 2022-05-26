import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function ArticleCard({ img, title, firstTitle, date, as }) {
  let formattedDate = date.slice(0, 10);
  if (title === firstTitle) {
    return null;
  }
  return (
    <div
      className="hover:-translate-y-1 hover:translate-x-2 ease-in duration-100 mb-8 w-full px-2.5 pb-6 hover:border-2 hover:border-black dark:hover:border-white md:w-80"
    >
      <article className="flex flex-col justify-end">
        <div className="image-container w-full">
          <Image src={img} 
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"></Image>
        </div>
        <small className="mb-2 mt-4">{formattedDate}</small>
        <h3 className="mb-12 text-2xl text-2xl font-semibold">{title}</h3>

        <Button
          bColor="bg-gradient-to-r from-accent via-blue to-purple"
          tColor="text-white mt-auto"
          text="Read Article"
          url="/posts/[slug]"
          as={`/posts/${as}`}
        />
      </article>
    </div>
  );
}
