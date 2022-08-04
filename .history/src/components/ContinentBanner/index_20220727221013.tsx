import { Flex, Highlight, Text } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      w="100"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(https://naplaca.com.br/wp-content/uploads/2017/10/touristic-louvre-back.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Highlight
        query="Europa"
        styles={{
          width: "11%",
          alignContent:'center',
          justifyContent:'center',
          px: "2",
          py: "1",
          rounded: "full",
          bg: "white",
          fontSize: ["3xl", "4xl", "5xl"],
          fontWeight: "bold",
          color: "yellow.500",
        }}
      >
        Europa
      </Highlight>
    </Flex>
  );
}
