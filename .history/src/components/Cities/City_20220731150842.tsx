import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { continents } from "../../api";

interface Continents {
  continentId: number;
  continentName: string;
  continentDescription: string;
  continentCountries: number;
  continentLanguages: number;
  continentMostCities: number;
  continentMostVisitsCities: [
    {
      city: string;
      country: string;
      flag: string;
    }
  ];
}

interface ContinentsProps {
  continent: Continents;
}

export function City({ continent }: ContinentsProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image
        src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        h="170px"
        w="100%"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>

          {continent.continentMostVisitsCities.map(city =>
            <h2>
              {city.city}
            </h2>
          )}

          <Text mt="3" fontSize="md" color="gray.500">
            Reino Unido
          </Text>
        </Flex>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACZCAMAAADXexy/AAAAYFBMVEXIEC7///8BIWnTQVnYV2z43+PPMErut8Djh5b99/j7/P2Rn74PLXELKm+AkLT4+fvm6fBfc6BOZJbAyNotR4MnQn+4wdXKGDX77/Hgd4jNJUDrp7LcZ3rnl6Tzy9H00dc6gwdOAAAEvElEQVR4nO2d6XLbMAyE6Tp3r1xtjrbJ+79lx4pVKxZEEcAumM5gf2WimORH7lqKRJHl5HSzrKvPXz5BdChyW2raHv4QU/HXb9/35T0+zas7Oy/l4eKy0gPXN5Bm9OK/vR6L+/U8q2xH/tYLlQ7Y3N0D2tGH/8fPsbBXodrB+ZMfl4QIQQ/+NesPhyZWWJY/BB34V60/5WeHIJy/wfrv+bkhCOZvsv4xPzMEsfxt1p/xE0MQyX+w/kvV+gI/LQRx/O3WF/lJIQjjV1hf5ueEIIhfZf03/vrpQZApBCH8Suu/8bcaZSJDCCL4b5TWH/kVvTVKHQI+f+sFj8Cv/MhO2hCw+S3Wn/DTQ0Dm137rT/ivbP220YWAyn9/N35G7+NizM3w4fYQEPnN1h+GsHjM0x4CHr+z9cXdg1353e4tmGL68AMGruyLIoeAwo9o88hPDgGBH+PZgi4wiB81XGVaKC8EaH5YS9/x80KA5Qc6tfCKZvFDB+mYnxQCID+2fXN+Sghg/Gh/CvyMEID48UMj8uNDgOEnRHOBH93TCH7KV/MSP7g6Pz/p1LzMD7Wbm591aVbjB/a5k593aV7lx1Xs4mf+a7bCjzKeh5/6r/kqP6b37fzkWzPr/JAmWPnpt+Za+AEWNPLzb8228bvHwcQfcWu+kd/bGAN/wF1pDb/PjAb+gKcSOn5XCPT8e5EfzWr4XSGw8dMfzev4XSEw8POnZmj53SFQ8EdMzVHze0PQzB8wK8XG7wtBM3/ArCQrvycEzfyzY5SpmaVSJkXa8x9ZyR+s5E/+5E/+5E/+5O/Pvw3WQ5X/Ibo51dakUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqnU/6ToB64f7flv9AP3j/b8P7rC5E/+5E/+5E/+5E/+3vzO938knZ7MuA4H7fznZ/O///24P2h+/8fyodvrSjMvL+aX+M8IfrnkP+MCtmHvfx3e/1OPko9fdFbZvoxHQ97/U1t/0kA3Pz4E9vd/BdUNCuFHh8D6/rd6bFD84BDY3v/XNwvIDw2Baf0HQSu2NPA7amOs/+Cwvnf9D0moEKjXf7E1xsDv7XIkv8f6mPV/jPVC+AHjYOR3+w7AD2mClZ8eAsX6b4KaLWjnJ4egef0/X+97+KkhaFz/0Vuxi58Zgrb1PwXpjOfk54WgZf1XQJ+7+VkhWF//F1Kdn58UgtX1nwUZ7Ibgp4RgZf1vVE9j+AkhqK7/jqqEsv47Zmhq6/8Lsn7TwvjR7Vve/wHTv3h+rD+X9v8AFM3ihw7Swv4vglxX2lh+YEvF/X/cvUrnhzlV2P/JV2AQP2q45vt/CfLfaSHwY9p8vP+bpy+j+RGeLZhi+vADBq5E3GSM2f/R1PoScZM5aP9PSWvuLVeOD7c2MWz/V/0QVua/IJ+0Uvk9IVjmhz5pJ/PbQ7DED55pweY3nwlkfvhMGz7/dP93BZHIj59pFcFvCoHAj59kFMRvCcGMnzHJLIzfcCZo6CP3JMNAfnUIVg77rR/Mrw3Bij381g/n14VguWd2Ali/A78mBOIvx9YgrN+DXxEC0RSDQNbvw98cguP++CeU9XvxN4Zgw7Z+N/62ENCtP6gPf0sIJOs/Ia0/qBf/agj+AoTe43JUadxpAAAAAElFTkSuQmCC"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
