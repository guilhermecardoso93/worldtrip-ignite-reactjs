import { Box, Flex, Heading } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";

export function ContinentBanner() {
  const { bgImageBanner, continentName } = useContinent();
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
        <Box bg='yellow.500' w='auto%' px={6} py={3} color='white' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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