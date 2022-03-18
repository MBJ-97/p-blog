import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Drawer() {
  return (
    <>
      <div className="mt-10 mb-20">
        <ul className="flex flex-col justify-center space-y-7">
          <li className="mx-auto">
            <Link href="https://mahdibeldjoudi.xyz/">
              <li className="mx-auto">
                <a className="underlineStyle">
                  <span>Home</span>
                </a>
              </li>
            </Link>
          </li>
          <Link href="/under-construction">
            <li className="mx-auto">
              <a className="underlineStyle">
                <span>Dev-Portfolio</span>
              </a>
            </li>
          </Link>
          <li className="mx-auto">
            <Button
              url="mailto:mehdiibeldjoudi@gmail.com"
              bColor="bg-white"
              tColor="text-accent"
              text="Contact"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
