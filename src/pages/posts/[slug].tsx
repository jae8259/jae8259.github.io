import { PATH } from "@/shared/constants";
import { mapApiUrl } from "@/shared/mappers";
import { DarkMode } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostProps, PostResponse, PostsParams } from "./types";

export const getServerSideProps = async ({
  params,
}: {
  params: PostsParams;
}) => {
  try {
    const response = await axios.get<PostResponse>(
      mapApiUrl(PATH.posts, params.slug)
    );
    const post = response.data;

    return { props: { post } };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { redirect: { destination: PATH.posts, permanent: false } };
    }
  }
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
