import { PATH } from "@/shared/constants";
import { mapApiUrl } from "@/shared/mappers";
import { PostResponse } from "@/types/posts";
import axios from "axios";

export const generatePostsPathMap = async () => {
  const res = await axios.get<PostResponse[]>(mapApiUrl(PATH.posts));
  const posts = res.data;

  const paths = posts.reduce(
    (acc, post) => ({
      ...acc,
      [`/posts/${post.slug}`]: {
        page: "/posts/[slug]",
        query: { slug: post.slug },
      },
    }),
    {}
  );

  return paths;
};
