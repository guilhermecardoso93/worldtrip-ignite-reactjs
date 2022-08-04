import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { MainItensBar } from "../components/MainItensBar";
import Separador from "../components/Separador";

export function Home(){
  return (
    <Flex direction='column'>
      <Header />
      <Banner/>
      <MainItensBar/>
      <Separador />
    </Flex>
  )
}