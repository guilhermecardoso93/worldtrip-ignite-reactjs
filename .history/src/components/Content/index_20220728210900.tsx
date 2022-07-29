import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";
import { Cities } from "../Cities";
import { Infos } from "./Infos";

export function Content() {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
      pb="5"
      mb='10'
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        A Europa é, por convenção um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a lesta pela divisória de água dos montes Urais, o rio
        Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
      </Text>
      <Infos />
      <Cities/>
    </Grid>
  );
}
