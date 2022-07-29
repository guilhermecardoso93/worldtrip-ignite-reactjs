import { Flex, Grid, Heading, Highlight, Text } from "@chakra-ui/react";

export function Content() {
  return (
   <Grid templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']} gap={[5, 10 ,16 ,20]} my={['8', '20']}>
    <Text fontSize={['lg', 'xl', 'xl', '2xl']}>

    </Text>

   </Grid>
  );
}
