import { Flex } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex 
      w='100%'
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/banner.jpg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat='no-repeat'
      bgSize='cover'
    > 
    <Flex
      justify={['center', 'space-between']} align='center' w='100%' mx='auto' px={['4', '10', '15', '20', '36']}
    >

    </Flex>

    </Flex>
  )
}