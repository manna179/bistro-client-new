import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";

const OurBlog = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3 mt-2">Our Blogs !</h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={'auto'}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {" "}
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3 ">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-items-end gap-8 items-center ">
              <img
                className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                alt=""
              />
              {/* <Link className="hover:text-red-400">Hot Categories</Link> */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, ullam.</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default OurBlog;
