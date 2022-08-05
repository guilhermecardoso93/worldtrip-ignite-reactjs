import { Grid, Text } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";
import { Infos } from "./Infos";

export function Content() {
  const continent = useContinent();
  return (
    <>
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
          {continent.continentDescription}
        </Text>
        <Infos />
      </Grid>
    </>
  );
}