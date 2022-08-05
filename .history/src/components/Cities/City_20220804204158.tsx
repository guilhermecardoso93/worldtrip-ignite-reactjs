import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";


interface Props {
  city: { cityName: string; country: string; flag: string; cityImg:string };
}

export default function City({ city }: Props) {
  const continent = useContinent()
 return (
  <Box borderRadius="4px" overflow="hidden">
    <Image src={city.cityImg} h="170px" w="100%"/>
    <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
      <Flex direction="column">
        <Heading fontSize="xl" fontWeight="500">{city.cityName}</Heading>
        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{city.country}</Text>
      </Flex>
      <Image src={city.flag} w="30px" h="30px" borderRadius="50%" objectFit="cover"/>
    </Flex>
  </Box>
 )
}