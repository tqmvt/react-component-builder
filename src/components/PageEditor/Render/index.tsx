import React from "react";
import { RenderItem } from "./Item";

interface RenderProps {
  baseImageUrl: string;
  components: ComponentSection[];
  placeholderImageUrl: string;
}
export const Render = ({
  baseImageUrl,
  components,
  placeholderImageUrl,
}: RenderProps) => {
  return (
    <div>
      {components.map((component, index) => {
        return (
          <RenderItem
            baseImageUrl={baseImageUrl}
            item={component}
            placeholderImageUrl={placeholderImageUrl}
            key={`render_${component.id}_${index}`}
          />
        );
      })}
    </div>
  );
};
