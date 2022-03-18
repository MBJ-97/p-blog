import constructionImage from "../public/images/under-construction.png";
import Image from "next/image";

export default function underConstruction() {
  return (
    <div className="h-screen">
      <h1 className="text-center text-xl font-semibold">
        This section is under construction
      </h1>
      <div className="mx-auto max-w-3xl">
        <Image src={constructionImage} layout={"responsive"}></Image>
      </div>
    </div>
  );
}
