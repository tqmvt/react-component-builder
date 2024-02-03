import React, { useEffect, useState } from "react";

import classNames from "classnames";
import { getImageUrl } from "../utils/parseURLs";

interface IAssetImageProps {
  src: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  fill?: boolean;
  rounded?: boolean;
  apiUrl: string;
  placeholderImageUrl: string;
}

export const HtmlImage = ({
  src,
  width = 300,
  height = 100,
  className = "",
  alt = "Image",
  fill,
  rounded,
  apiUrl,
  placeholderImageUrl,
  ...props
}: IAssetImageProps) => {
  const [source, setSource] = useState(
    getImageUrl(src, apiUrl, placeholderImageUrl)
  );

  useEffect(() => {
    setSource(getImageUrl(src, apiUrl, placeholderImageUrl));
  }, [src]);

  return (
    <img
      src={source}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={classNames({ [className]: className })}
      alt={alt}
      {...props}
    />
  );
};
