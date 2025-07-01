// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const WebCompany = () => {
  return (
    <div>
      <Swiper
       navigation={true}
       modules={[Navigation]}
        className="mySwiper mt-12 mb-4"
         spaceBetween={2}
        slidesPerView={'auto'}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[30%] lg:!w-1/6 ">
          <div className="flex gap-2 items-center ">
            <img
              className="h-12 rounded-xl"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        
        
        
      </Swiper>
    </div>
  );
};

export default WebCompany;
