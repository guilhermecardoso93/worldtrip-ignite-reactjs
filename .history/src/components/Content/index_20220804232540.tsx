import { Grid, Text } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";
import { Infos } from "./Infos";

export function Content() {
  const continent = useContinent();
  return (
    <>
        <Infos />
      </Grid>
    </>
  );
}