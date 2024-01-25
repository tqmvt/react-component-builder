/**
 * Static assets are uploaded on minor `/static` bucket.
 *
 * @example https://minio-api-stage.eshop.com/static/login-back.png
 */
export const getStaticAssetUrl = (fileName: string) => {
  return `${String(
    process.env.NEXT_PUBLIC_IMAGE_STORAGE_API
  )}/static/${fileName}`;
};

export const PLACEHOLDER_IMAGE = getStaticAssetUrl(
  "placeholder-no-product-image.jpg"
);

export const PAGE_EDITOR_SPACER_VALUES = {
  empty: "",
  dot: "................................................................................................................................................................................................................................................................................",
  dash: "----------------------------------------------------------------------------------------------------------------------------------------------------------------------",
  asterisk:
    "********************************************************************************************************************************************************",
};
