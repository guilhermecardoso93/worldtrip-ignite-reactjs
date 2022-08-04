import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";
import { useState } from "react";
import { continents } from "../../data/continents";
import { useContinent } from "../../hooks/useContinent";
import { Cities } from "../Cities";
import { Infos } from "./Infos";

export function Content() {
  const continent = continents.map((continent) => (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {continent.continentTitle}
      </Text>
      <Infos />
    </Grid>
  ));

  return (
    <>
      {continent}
    </>
  );
}
