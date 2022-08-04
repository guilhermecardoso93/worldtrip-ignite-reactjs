import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  return (
    <Flex w='100%' maxW='1240px' mx='auto' mb={['5', '10']} h={['250px', '450px']}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Flex>
  );
};
