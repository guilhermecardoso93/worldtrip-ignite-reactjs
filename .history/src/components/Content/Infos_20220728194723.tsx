import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

export function Infos() {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex direction='column' justify='center' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='yellow.400' fontWeight='500'>50</Heading>
        <Text>países</Text>
      </Flex>
    </Flex>
  );
}
