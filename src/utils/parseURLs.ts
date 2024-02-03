export const isExternalUrl = (url: string) => {
  if (!url) return false;

  const hasHttpOrHttps =
    url.startsWith("http://") || url.startsWith("https://");
  return hasHttpOrHttps;
};

export const getImageUrl = (
  imageUrl: string,
  apiUrl: string,
  placeholderImageUrl: string
) => {
  if (!imageUrl) return placeholderImageUrl;

  return isExternalUrl(imageUrl) ? imageUrl : `${apiUrl}/${imageUrl}`;
};
