export enum PageEditorTextSizeOptions {
  "18px" = "18px",
  "24px" = "24px",
  "48px" = "48px",
}

export enum PageEditorSpacerHeightOptions {
  "18px" = "18px",
  "24px" = "24px",
  "48px" = "48px",
}

export enum PageEditorTextIndentationOptions {
  "left" = "left",
  "center" = "center",
  "right" = "right",
}

export enum PageEditorSpacerTypes {
  "empty" = "empty",
  "dot" = "dot",
  "dash" = "dash",
  "asterisk" = "asterisk",
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
