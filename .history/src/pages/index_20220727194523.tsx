import { Flex, Heading } from "@chakra-ui/react";
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
      <Heading textAlign="center"
      fontWeight="500"
      mb={["5","14"]}
      fontSize={["lg",
      "3xl",
      "4xl"]}>
        Vamos nessa?<br/> Então escolha seu continente
      </Heading>
    </Flex>
  )
}