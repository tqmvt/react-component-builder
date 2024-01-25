import React, { useState } from "react";
import { Badge, Box, Card, Flex } from "@chakra-ui/react";
import { RenderItem } from "./Item";

interface RenderProps {
  components: ComponentSection[];
}
export const Render = ({ components }: RenderProps) => {
  return (
    <Card height="700px" p="6" overflow="auto" bgColor="#F9FAFD" mt={3}>
      <>
        {components.map((component, index) => {
          return <RenderItem item={component} key={index} />;
        })}
      </>
    </Card>
  );
};
