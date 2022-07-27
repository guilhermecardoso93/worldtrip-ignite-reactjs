import { Flex, Grid, Image } from "@chakra-ui/react";


export function Header(){
  return (
    <Flex bg='white' w='100' as='header' mx='auto' px='1rem' h={['50px', '100px']} align='center' justifyContent='center'>
      <Grid h='100' mx='auto' w='100%' maxW='1160px' templateColumns='repeat(3, 1fr)' justifyContent='center'  alignItems='center' >
        <Image 
          src='/logo.svg'
        />
      </Grid>
    </Flex>
  )
}