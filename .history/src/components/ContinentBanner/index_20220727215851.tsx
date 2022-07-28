import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        color="grey.100"
        fontWeight="bold"
      >
        Europa
      </Text>
    </Flex>
  );
}
