import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesListing({ posts, categories, firstTitle }) {
  const [rawPosts, setRawPosts] = useState(posts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [catId, setCatId] = useState("");

  const onChange = (e) => {
    setCatId(e.target.value);
    let results = rawPosts.filter(
      (i) => i.categories[0]._ref == e.target.value
    );
    setFilteredPosts(results);
  };

  return (
    <>
      <div className="filter-section my-16 flex items-center justify-between">
        <h3 className="underline underline-offset-8">All articles</h3>
        <select
          name="article_category"
          id="category"
          className="border-2 border-solid bg-white px-6 py-4 dark:bg-gray"
          onChange={onChange}
        >
          <option value="">All categories</option>
          {categories.map((cat) => (
            <option key={cat.title} value={cat._id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-20 gap-4 md:flex md:flex-wrap">
        {filteredPosts.length > 0 ? ( // shit goes here catId == not empty
          filteredPosts.map((post) => (
            <ArticleCard
              key={post.title}
              img={post.mainImage.asset.url}
              title={post.title}
              firstTitle={firstTitle}
              date={post._createdAt}
              as={post.slug.current}
            />
          ))
        ) : catId !== "" ? (
          <p>Oups! No articles yet this category</p>
        ) : (
          rawPosts.map((post) => (
            <ArticleCard
              key={post.title}
              img={post.mainImage.asset.url}
              title={post.title}
              firstTitle={firstTitle}
              date={post._createdAt}
              as={post.slug.current}
            />
          ))
        )}
      </div>
    </>
  );
}
