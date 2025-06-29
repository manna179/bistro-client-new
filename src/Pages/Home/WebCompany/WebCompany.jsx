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
         spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
            <h3>CodePen!</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-items-end gap-8 items-center">
            <img
              className="h-24"
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
