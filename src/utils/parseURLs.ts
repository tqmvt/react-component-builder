import { PLACEHOLDER_IMAGE } from "../constants";

export const isExternalUrl = (url: string) => {
  if (!url) return false;

  const hasHttpOrHttps =
    url.startsWith("http://") || url.startsWith("https://");
  return hasHttpOrHttps;
};

export const getImageUrl = (url: string) => {
  if (!url) return PLACEHOLDER_IMAGE;

  return isExternalUrl(url)
    ? url
    : `${String(
      process.env.NEXT_PUBLIC_IMAGE_STORAGE_API
    )}/${url}`;
};
