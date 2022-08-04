import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

export function Infos() {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          50
        </Heading>
        <Text fontWeight="500" fontSize={["md", "xl"]} color="yellow.600">
          países
        </Text>
      </Flex>
    </Flex>
  );
}
