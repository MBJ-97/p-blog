export default function Filter({ categories }) {
  return (
    <div className="my-16 flex items-center justify-between">
      <h3 className="underline underline-offset-8">All articles</h3>
      <select
        name="article_category"
        id="category"
        className="border-2 border-solid bg-white px-6 py-4 dark:bg-gray"
      >
        <option value="">Choose category</option>
        {categories.map((cat) => (
          <option key={cat.title} value={cat.title}>
            {cat.title}
          </option>
        ))}
      </select>
    </div>
  );
}
