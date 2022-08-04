import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

export function Infos() {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading>50</Heading>
        <Text>países</Text>
      </Flex>
    </Flex>
  );
}
