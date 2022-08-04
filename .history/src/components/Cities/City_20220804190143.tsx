import { Box, Flex, Image } from "@chakra-ui/react";

interface Props {
  continentName?:string;
  city: { cityName: string; country: string; flag: string };
}

export function City({city, continentName} : Props ) {
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
       
      </Flex>
    </Box>
  );
}
