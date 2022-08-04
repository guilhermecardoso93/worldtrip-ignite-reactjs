import { Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export interface Continents {
  continentId: number;
  continentName: string;
  continentDescription: string;
  continentCountries: number;
  continentLanguages: number;
  continentMostCities: number;
  
}

export interface ContinentsProps {
  continent: Continents;
}

export function Cities({ continent }: ContinentsProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City continent={continent} />
      </Grid>
    </>
  );
}
