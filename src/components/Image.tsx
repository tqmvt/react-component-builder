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
}

export const HtmlImage = ({
  src,
  width = 300,
  height = 100,
  className = "",
  alt = "Image",
  fill,
  rounded,
  ...props
}: IAssetImageProps) => {
  const [source, setSource] = useState(getImageUrl(src));

  useEffect(() => {
    setSource(getImageUrl(src));
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
