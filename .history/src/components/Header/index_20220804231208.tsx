import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export function Header() {
  const home = window.location.pathname === '/'


  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justifyContent="center"
    >
      <Grid
        h="100"
        mx="auto"
        w="100%"
        maxW="1160px"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignItems="center"
      >
        {home && (
          <Link to="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
