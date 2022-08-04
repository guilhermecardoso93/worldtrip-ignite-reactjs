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
        //fontSize={["3xl", "4xl", "5xl"]}
        //color="yellow.500"
        //fontWeight="bold"
        query="spotlight"
        styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
      >
        Europa
      </Highlight>
    </Flex>
  );
}
