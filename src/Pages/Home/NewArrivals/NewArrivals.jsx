import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NewArrivals = () => {
  return (
    <section>
      {/* navSection for New Arrivals  */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-3 mt-2">New Arrivals</h2>
        {/* New arrivals category section  */}
        <section>
          <ul className="flex justify-center items-center gap-4">
            <li>
              {" "}
              <Link to="/automobiles">Automobiles</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/beautyAndHealth">Beauty & Health</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/gamesAndConsole">Games & Consoles</Link>{" "}
            </li>
          </ul>
        </section>
      </div>
      {/* product section for each categories  */}
      <div>
        <Swiper
          className=""
          spaceBetween={2}
          slidesPerView={'auto'}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
            <img
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt=""
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
