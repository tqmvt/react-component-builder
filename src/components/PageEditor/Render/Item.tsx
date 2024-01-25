import React from "react";
import {
  PageEditorComponentsType,
  PageEditorSpacerTypes,
} from "../../../types/page-editor";
import { HtmlImage } from "../../Image";
import { PAGE_EDITOR_SPACER_VALUES } from "../../../constants";

interface ItemProps {
  item: ComponentSection;
}
export const RenderItem = ({ item }: ItemProps) => {
  if (item.type === PageEditorComponentsType.text) {
    return (
      <div
        style={{
          fontWeight: "bold",
          fontSize: item.settings?.fontSize,
          textAlign: item.settings?.textIndentation || "left",
        }}
      >
        {item.content}
      </div>
    );
  } else if (item.type === PageEditorComponentsType.image) {
    return (
      <HtmlImage
        src={item.content}
        width={item.settings?.width}
        height={item.settings?.height}
        alt={item.settings?.imageAltText}
      />
    );
  } else if (item.type === PageEditorComponentsType.spacer) {
    return (
      <div style={{ paddingTop: item.settings?.spacerHeight }}>
        {PAGE_EDITOR_SPACER_VALUES[item.content as PageEditorSpacerTypes]}
      </div>
    );
  }

  return null;
};
