import React from "react";
import { Render } from "./Render";

interface PageEditorProps {
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
    <div
      style={{ justifyContent: "center", marginTop: "1.25rem", gap: "0.75rem" }}
    >
      <Render
        baseImageUrl={baseImageUrl}
        components={components}
        placeholderImageUrl={placeholderImageUrl}
      />
    </div>
  );
};
