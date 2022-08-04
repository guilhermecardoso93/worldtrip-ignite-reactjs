import { Flex, Heading } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";
import { continents } from "../../data/continents";

export function ContinentBanner() {
  const { continentName, bgImageBanner } = useContinent();
  return (
    <>
      {continents.map((continent) => (
        <Flex
          w="100"
          h={["150px", "300px", "500px"]}
          px={["0", "0", "36"]}
          pt={["0", "0", "72"]}
          bgImage={continent.bgImageBanner}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          align="center"
          justify={["center", "center", "flex-start"]}
        >
          <Heading
            textAlign={["center", "left"]}
            fontSize={["1.75rem", "6xl"]}
            color="gray.500"
            fontWeight="500"
          >
            {continentName}
          </Heading>
        </Flex>
      ))}
    </>
  );
}
