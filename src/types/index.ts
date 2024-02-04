export enum PageEditorTextSizeOptions {
  "14px" = "14px",
  "18px" = "18px",
  "24px" = "24px",
}

export enum PageEditorSpacerHeightOptions {
  "18px" = "18",
  "24px" = "24",
  "48px" = "48",
}

export enum PageEditorTextIndentationOptions {
  "left" = "left",
  "center" = "center",
  "right" = "right",
}

export enum PageEditorSpacerTypes {
  "empty" = "empty",
  "dotted" = "dotted",
  "dashed" = "dashed",
  "solid" = "solid",
}

export enum PageEditorComponentsType {
  text,
  image,
  video,
  spacer,
}

declare global {
  type ComponentSection = {
    type: PageEditorComponentsType;
    id: string;
    content: string | PageEditorSpacerTypes;
    settings?: {
      width?: number;
      height?: number;
      fontSize?: PageEditorTextSizeOptions;
      textIndentation?: PageEditorTextIndentationOptions;
      imageAltText?: string;
      spacerHeight?: PageEditorSpacerHeightOptions;
    };
  };
}
