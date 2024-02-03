import React from "react";
import { Render } from "./Render";

interface PageEditorProps {
  apiUrl: string;
  components: ComponentSection[];
  placeholderImageUrl: string;
}
export const PageEditor = ({
  apiUrl,
  components,
  placeholderImageUrl,
}: PageEditorProps) => {
  return (
    <div
      style={{ justifyContent: "center", marginTop: "1.25rem", gap: "0.75rem" }}
    >
      <Render
        apiUrl={apiUrl}
        components={components}
        placeholderImageUrl={placeholderImageUrl}
      />
    </div>
  );
};
