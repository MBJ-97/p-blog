import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ArticleCard({ img, title, firstTitle, date, as }) {
  let formattedDate = date.slice(0, 10);
  if (title === firstTitle) {
    return null;
  }
  return (
    <motion.div
      whileHover={{ y: -4, x: 8 }}
      className="mb-8 w-full px-2.5 pt-3 pb-6 hover:border-2 hover:border-black dark:hover:border-white md:w-80"
    >
      <article className="flex h-96 flex-col justify-end">
        <div className="image-container relative h-full w-full">
          <Image src={img} layout="fill"></Image>
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
    </motion.div>
  );
}
