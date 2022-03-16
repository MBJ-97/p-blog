import React from "react";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import Link from "next/link";

export default function post({ articles }) {
  return (
    <>
      <h1>
        {articles.allPost.map((art) => (
          <p>{art.title} .</p>
        ))}
      </h1>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      {
        allCategory {
          title
        }
        allPost {
          title
          _createdAt
          slug {
            current
          }
          mainImage {
            asset {
              url
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      articles: data,
    },
  };
};
