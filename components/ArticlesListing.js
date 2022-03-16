import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesListing({ posts, categories, firstTitle }) {
  // const [rawPosts, setRawPosts] = useState(posts);
  // const [catId, setCatId] = useState();
  // const [filteredPosts, setFilteredPosts] = useState([]);
  // rawPosts.map((i) => console.log(i.categories[0]._ref));

  // // filter callback function
  // const filterPosts = (obj) => {
  //   let results = [];
  //   if (obj.categories[0]._ref == catId) {
  //     results.push(obj);
  //   }
  //   return results;
  // };

  // // On select change action
  // const onChange = (e) => {
  //   setCatId(e.target.value);
  //   let result = rawPosts.filter(filterPosts);
  //   setFilteredPosts(result);
  // };

  // //console.log(categories);
  // console.log(catId);
  // console.log(filteredPosts);
  return (
    <>
      {/* <div className="filter-section my-16 flex items-center justify-between">
        <h3 className="underline underline-offset-8">All articles</h3>
        <select
          name="article_category"
          id="category"
          className="border-2 border-solid bg-white px-6 py-4 dark:bg-gray"
          onChange={onChange}
        >
          <option value="">Choose category</option>
          {categories.map((cat) => (
            <option key={cat.title} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div> */}

      <div className="mb-20 gap-4 md:flex md:flex-wrap md:justify-between">
        {posts.map((post) => (
          <ArticleCard
            key={post.title}
            img={post.mainImage.asset.url}
            title={post.title}
            firstTitle={firstTitle}
            date={post._createdAt}
            as={post.slug.current}
          />
        ))}
      </div>
    </>
  );
}
