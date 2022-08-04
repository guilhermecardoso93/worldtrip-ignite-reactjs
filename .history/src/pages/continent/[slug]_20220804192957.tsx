import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Cities } from "../../components/Cities";
import { Content } from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import { useContinent } from "../../hooks/useContinent";

export function Continent() {
  const { continentId } = useContinent();
  return (
    <Flex direction="column" key={continentId}>
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}

