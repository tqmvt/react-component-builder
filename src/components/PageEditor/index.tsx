import React from "react";
import { Render } from "./Render";

interface PageEditorProps {
  components: ComponentSection[];
}
export const PageEditor = ({ components }: PageEditorProps) => {
  return (
    <div
      style={{ justifyContent: "center", marginTop: "1.25rem", gap: "0.75rem" }}
    >
      <Render components={components} />
    </div>
  );
};
