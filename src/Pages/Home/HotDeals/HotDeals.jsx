import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HotDeals = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-3 ">Hot Deals!</h2>
      {/* Swiper section for hot deals! */}
      <section>
        <Swiper
          spaceBetween={2}
          slidesPerView={'auto'}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/N68xdR6/lavash-rolls-with-stuffings-tomatoes.jpg"
              alt=""
            />
          </SwiperSlide>
          
        </Swiper>
      </section>
    </div>
  );
};

export default HotDeals;
