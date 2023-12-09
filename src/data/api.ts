import { env } from "@/env";

export function api(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL;
  const prefix = "/api/";
  const url = prefix.concat(path);

  if (!url.startsWith("/api//")) {
    throw new Error("The Request should be able started with '/' (bar)");
  }

  const buildedURL = new URL(url.replace("//", "/"), baseURL);

  return fetch(buildedURL, init);
}
