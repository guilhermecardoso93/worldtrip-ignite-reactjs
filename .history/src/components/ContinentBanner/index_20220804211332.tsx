import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";

export function ContinentBanner() {
  const { bgImageBanner, continentName, continentId } = useContinent();
  return (
    <>
      <Flex
        w="100"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`url('${bgImageBanner}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Box bg='tomato' w='100%' p={4} color='white'>
          <Heading
            textAlign={["center", "left"]}
            fontSize={["1.75rem", "6xl"]}
            color="gray.100"
            fontWeight="600"
            fill="white"
          >
            {continentName}
          </Heading>
        </Box>
      </Flex>
    </>
  );
}
