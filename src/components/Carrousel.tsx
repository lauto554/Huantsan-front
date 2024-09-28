import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Carrousel() {
  return (
    <Swiper autoplay={{ delay: 3000 }} loop={true} slidesPerView={1}>
      <SwiperSlide>
        <img src="/carrousel/Main-03.jpg" alt="Slide 3" className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carrousel/Main-06.jpg" alt="Slide 3" className="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/carrousel/Main-07.jpg" alt="Slide 1" className="" />
      </SwiperSlide>
    </Swiper>
  );
}
