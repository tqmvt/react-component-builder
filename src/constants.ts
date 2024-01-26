export const getStaticAssetUrl = (fileName: string) => {
  return `${String(
    process.env.NEXT_PUBLIC_IMAGE_STORAGE_API
  )}/static/${fileName}`;
};

export const PLACEHOLDER_IMAGE = getStaticAssetUrl(
  "placeholder-no-product-image.jpg"
);
