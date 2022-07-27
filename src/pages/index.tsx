import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { MainItensBar } from "../components/MainItensBar";

export function Home(){
  return (
    <Flex direction='column'>
      <Header />
      <Banner/>
      <MainItensBar/>
    </Flex>
  )
}