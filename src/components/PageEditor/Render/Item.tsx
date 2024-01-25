import React from "react";
import { Text } from "@chakra-ui/react";
import { PageEditorComponentsType, PageEditorSpacerTypes } from "../../../types/page-editor";
import { HtmlImage } from "../../Image";
import { PAGE_EDITOR_SPACER_VALUES } from "../../../constants";

interface ItemProps {
  item: ComponentSection;
}
export const RenderItem = ({ item }: ItemProps) => {
  if (item.type === PageEditorComponentsType.text) {
    return (
      <Text
        fontWeight="semibold"
        fontSize={item.settings?.fontSize}
        textAlign={item.settings?.textIndentation || "left"}
      >
        {item.content}
      </Text>
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
      <Text
        pt={item.settings?.spacerHeight}
        justifyContent="space-between"
        align="justify"
      >
        {PAGE_EDITOR_SPACER_VALUES[item.content as PageEditorSpacerTypes]}
      </Text>
    );
  }

  return null;
};
