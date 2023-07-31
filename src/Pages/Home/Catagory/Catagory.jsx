import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const Catagory = () => {
  return (
   <section>
    <SectionTitle heading={'order online'} subHeading={'From 11:00am to 10:00pm'}></SectionTitle>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img src={slider1} alt="" />
        <h1 className="uppercase text-white -mt-16 text-center text-3xl">
            Salads
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="" />
        <h1 className="uppercase text-white -mt-16 text-center text-3xl">
            pizza
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="" />
        <h1 className="uppercase text-white -mt-16 text-center text-3xl">
            Soup
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
        <h1 className="uppercase text-white -mt-16 text-center text-3xl">
            desert
        </h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
        <h1 className="uppercase text-white -mt-16 text-center text-3xl">
            Salads
        </h1>
      </SwiperSlide>
    </Swiper>
   </section>
  );
};

export default Catagory;
