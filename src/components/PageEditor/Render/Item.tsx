import React from "react";
import {
  PageEditorComponentsType,
  PageEditorSpacerTypes,
  PageEditorTextSizeOptions,
} from "../../../types";
import { HtmlImage } from "../../Image";

interface ItemProps {
  baseImageUrl: string;
  item: ComponentSection;
  placeholderImageUrl: string;
}
export const RenderItem = ({
  baseImageUrl,
  item,
  placeholderImageUrl,
}: ItemProps) => {
  if (item.type === PageEditorComponentsType.text) {
    return (
      <div
        style={{
          fontWeight:
            item.settings?.fontSize === PageEditorTextSizeOptions["14px"]
              ? "normal"
              : "bold",
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
        baseImageUrl={baseImageUrl}
        placeholderImageUrl={placeholderImageUrl}
      />
    );
  } else if (item.type === PageEditorComponentsType.spacer) {
    return (
      <div
        style={{
          paddingTop: `${Number(item.settings?.spacerHeight) / 2}px`,
          paddingBottom: `${Number(item.settings?.spacerHeight) / 2}px`,
        }}
      >
        {(item.content === (PageEditorSpacerTypes.dashed as string) ||
          item.content === (PageEditorSpacerTypes.dotted as string) ||
          item.content === (PageEditorSpacerTypes.solid as string)) && (
          <hr
            style={{
              borderColor: "black",
              borderStyle: item.content,
              opacity: "1",
              margin: 0,
            }}
          />
        )}
      </div>
    );
  }

  return null;
};
