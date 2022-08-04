import { Flex, Heading, Text } from "@chakra-ui/react";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { continents } from "../../data/continents";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import "../../styles/slider.scss";

export default () => {
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
              <a href={`/continent/${continent.continentName}`}>
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
