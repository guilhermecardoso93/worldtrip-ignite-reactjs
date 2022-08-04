import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        h="170px"
        w="170px"
      />
      <Flex
        p="6"
        align="center"
        justifyContent="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500">
            Reino Unido
          </Text>
        </Flex>
        <Image src="data:image/png;base64,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" />
      </Flex>
    </Box>
  );
}
