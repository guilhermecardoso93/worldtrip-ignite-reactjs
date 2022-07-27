import { Flex } from "@chakra-ui/react";

interface ItemBarProps{
  icon: string;
  text: string
}

export function ItemBar({ icon, text} : ItemBarProps){
  return (
    <Flex direction={['row', 'column']}> 

    </Flex>
  )
}