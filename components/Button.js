import Link from "next/link";

export default function Button({
  url,
  as,
  bColor,
  tColor,
  text,
  ClickHandler,
}) {
  return (
    <Link href={url} as={as}>
      <a onClick={ClickHandler}>
        <div
          className={`${bColor} ${tColor} cursor-pointer rounded py-4 px-6 text-center`}
        >
          {text}
        </div>
      </a>
    </Link>
  );
}
