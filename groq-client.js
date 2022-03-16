import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "yj3cate4",
  dataset: "production",
  useCdn: true,
});
