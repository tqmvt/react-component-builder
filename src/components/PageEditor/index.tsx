import React from "react";
import { Render } from "./Render";

export interface PageEditorProps {
  baseImageUrl: string;
  components: ComponentSection[];
  placeholderImageUrl: string;
}
export const PageEditor = ({
  baseImageUrl,
  components,
  placeholderImageUrl,
}: PageEditorProps) => {
  return (
    <Render
      baseImageUrl={baseImageUrl}
      components={components}
      placeholderImageUrl={placeholderImageUrl}
    />
  );
};
