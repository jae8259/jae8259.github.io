import { API_BASE_PATH } from "@/shared/constants";

export function mapApiUrl(...paths: string[]) {
  return (
    paths.reduce((acc: string, curr: string) => {
      return acc + "/" + curr;
    }, API_BASE_PATH) + "/"
  );
}
