import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export interface Continents {
  continentMostVisitsCities: any;
  continent: {
    continentId: number;
    continentName: string;
    continentDescription: string;
    continentCountries: number;
    continentLanguages: number;
    continentMostCities: number;
    continentMostVisitsCities?: {
      city?: string;
      country?: string;
      flag?: string;
    };
  };
}

export interface ContinentsProps {
  continent: Continents;
}

export function City({ continent }: ContinentsProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        h="170px"
        w="100%"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          {continent.continentMostVisitsCities.map((city) => (
            <>
              <Heading fontSize="xl" fontWeight="500">
                {city.city}
              </Heading>
              <Text mt="3" fontSize="md" color="gray.500">
                {city.country}
              </Text>
              <Image
                src={city.flag}
                w="30px"
                h="30px"
                borderRadius="50%"
                objectFit="cover"
              />
            </>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
