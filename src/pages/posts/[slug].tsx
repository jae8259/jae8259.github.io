import { API_BASE_PATH, PATH } from "@/shared/constants";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostResponse, PostSchema } from "./types";

export default function Post() {
  const { query } = useRouter<"/posts/[slug]">();
  const slug = query.slug;
  const [post, setPost] = useState<PostResponse>();

  const getPost = async (slug: string) => {
    try {
      const response = await axios.get<PostResponse>(
        API_BASE_PATH + PATH.posts + `/${slug}`
      );
      setPost(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setPost(PostSchema.parse({}));
      }
    }
  };

  useEffect(() => {
    if (slug) {
      getPost(slug);
    }
  }, [slug]);

  return <div>{post && <ReactMarkdown>{post.body}</ReactMarkdown>}</div>;
}
