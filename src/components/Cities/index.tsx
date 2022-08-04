import { Grid, Heading } from "@chakra-ui/react";
import { useContinent } from "../../hooks/useContinent";
import { City } from "./City";

export function Cities() {
  const continent = useContinent();

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
        {continent?.city?.map((city) => <City
          city={city}
          key={city.cityName}
        />)}
      </Grid>
    </>
  );
}
