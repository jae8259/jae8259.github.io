import { PATH } from "@/shared/constants";
import { mapApiUrl } from "@/shared/mappers";
import { DarkMode } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostResponse } from "./types";

export default function Post() {
  const router = useRouter<"/posts/[slug]">();
  const { query } = router;
  const slug = query.slug;
  const [post, setPost] = useState<PostResponse>();

  const getPost = async (slug: string) => {
    try {
      const response = await axios.get<PostResponse>(
        mapApiUrl(PATH.posts, slug)
      );
      setPost(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        router.push("/posts");
      }
    }
  };

  useEffect(() => {
    if (slug) {
      getPost(slug);
    }
  });

  return (
    <div>
      {post && (
        <DarkMode>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </DarkMode>
      )}
    </div>
  );
}
