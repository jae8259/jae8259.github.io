import { PATH } from "@/shared/constants";
import { mapApiUrl } from "@/shared/mappers";
import { PostProps, PostResponse, PostsParams } from "@/types/posts";
import { DarkMode } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const getStaticProps = async ({ params }: { params: PostsParams }) => {
  const response = await axios.get<PostResponse>(
    mapApiUrl(PATH.posts, params.slug)
  );
  const post = response.data;

  return { props: { post } };
};

export const getStaticPaths = async () => {
  const response = await axios.get<PostResponse[]>(mapApiUrl(PATH.posts));
  const posts = response.data;
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Post({ post }: PostProps) {
  const router = useRouter<"/posts/[slug]">();

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
