import React from "react";
import { RenderItem } from "./Item";

interface RenderProps {
  apiUrl: string;
  components: ComponentSection[];
  placeholderImageUrl: string;
}
export const Render = ({
  apiUrl,
  components,
  placeholderImageUrl,
}: RenderProps) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#F9FAFD",
        marginTop: "0.75rem",
      }}
    >
      {components.map((component, index) => {
        return (
          <RenderItem
            apiUrl={apiUrl}
            item={component}
            placeholderImageUrl={placeholderImageUrl}
            key={`render_${component.id}_${index}`}
          />
        );
      })}
    </div>
  );
};
