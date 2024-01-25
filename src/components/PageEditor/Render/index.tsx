import React from "react";
import { RenderItem } from "./Item";

interface RenderProps {
  components: ComponentSection[];
}
export const Render = ({ components }: RenderProps) => {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#F9FAFD",
        marginTop: "0.75rem",
      }}
    >
      {components.map((component, index) => {
        return <RenderItem item={component} key={index} />;
      })}
    </div>
  );
};
