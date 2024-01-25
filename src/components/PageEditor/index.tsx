import React, { useState } from "react";
import { Card, Flex } from "@chakra-ui/react";
import { Render } from "./Render";

interface PageEditorProps {
  components: ComponentSection[];
}
export const PageEditor = ({ components }: PageEditorProps) => {
  return (
    <Flex justifyContent="center" mt={5} gap={3}>
      <Render components={components} />
    </Flex>
  );
};
