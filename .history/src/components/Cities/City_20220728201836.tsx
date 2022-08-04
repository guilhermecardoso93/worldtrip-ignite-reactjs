import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export function City() {
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image src='https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' h='170px' w='170px'/>
      <Flex>
        <Flex>
          <Heading>Londres</Heading>
          <Text>Reino Unido</Text>
        </Flex>
        <Image src=''/>
      </Flex>
    </Box>
  );
}
