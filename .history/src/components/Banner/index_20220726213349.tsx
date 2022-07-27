import { Flex } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex 
      w='100%'
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/background.png')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat='no-repeat'
      bgSize='cover'
    >

    </Flex>
  )
}