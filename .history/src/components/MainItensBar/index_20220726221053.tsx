import { Grid, GridItem } from "@chakra-ui/react";
import { ItemBar } from "./ItemBar";

export function MainItensBar() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <ItemBar icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <ItemBar icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <ItemBar icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <ItemBar icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <ItemBar icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
