import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { continents } from "../../data/continents";
import { useContinent } from "../../hooks/useContinent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import "../../styles/slider.scss";

interface SwipeProps {
  continents: {
    continentId: string;
    continentName: string;
    continentTitle: string;
    bgImage: string;
  }[];
}
export default () => {
  const { continentName, bgImage, continentId, continentTitle } =
    useContinent();
  console.log(continents);

  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide>
            <Flex
              key={continent.continentId}
              w="100%"
              h="100%"
              alignItems="center"
              justify="center"
              direction="column"
              bgImage={continent.bgImage}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
              textAlign="center"
            >
              <a href="/continent/asia">
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="bold"
                >
                  {continent.continentName}
                </Heading>
                <Text
                  color="yellow.100"
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  {continent.continentTitle}
                </Text>
              </a>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

/*


        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="https://images.pexels.com/photos/19885/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
          >
            <a href="/continent/asia">
              <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="yellow.400"
                fontWeight="bold"
              >
                Ásia
              </Heading>
              <Text
                color="yellow.100"
                fontWeight="bold"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                O continente mistura de tradicional e tecnologia
              </Text>
            </a>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="https://images.pexels.com/photos/2845013/pexels-photo-2845013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
          >
            <a href="/continent/oceania">
              <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="yellow.400"
                fontWeight="bold"
              >
                Oceania
              </Heading>
              <Text
                color="yellow.100"
                fontWeight="bold"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                O continente da isolado pela beleza.
              </Text>
            </a>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
          >
            <a href="/continent/africa">
              <Heading
                fontSize={["3xl", "4xl", "5xl"]}
                color="yellow.400"
                fontWeight="bold"
              >
                Africa
              </Heading>
              <Text
                color="yellow.100"
                fontWeight="bold"
                fontSize={["0.8rem", "1xl", "2xl"]}
                mt={["2", "4"]}
              >
                O continente da vida.
              </Text>
            </a>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
          >
            <Link to="/continent/america">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="bold"
                >
                  America
                </Heading>
                <Text
                  color="yellow.100"
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente da amor.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage="https://images.pexels.com/photos/53389/iceberg-antarctica-polar-blue-53389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            textAlign="center"
          >
            <Link to="/continent/antartida">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="yellow.400"
                  fontWeight="bold"
                >
                  Antártida
                </Heading>
                <Text
                  color="yellow.100"
                  fontWeight="bold"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  mt={["2", "4"]}
                >
                  O continente gelado.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>*/
