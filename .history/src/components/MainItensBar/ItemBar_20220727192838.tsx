import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ItemBarProps {
  icon: string;
  text: string;
}

export function ItemBar({ icon, text }: ItemBarProps) {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })
  
  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile
        ? <Image src={`/icons/${icon}.png`} w="85px" h="85px" mb="6" />
        : <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
}
