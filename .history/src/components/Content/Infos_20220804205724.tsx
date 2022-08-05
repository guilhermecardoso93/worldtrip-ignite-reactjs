import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { useContinent } from "../../hooks/useContinent";

export function Infos() {
  const continent = useContinent();
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.continentCountries}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.600">
            países
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.continentLanguages}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.600">
            línguas
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.continentMostCities}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.600">
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  {continentMostCitiesTree}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
