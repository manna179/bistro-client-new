import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const PopularCategory = () => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-3 mt-2">popular category !</h2>
      {/* Category section for popular categories  */}
      <section>
        <Swiper
          className=""
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
              {/* second row for popularCategory slide */}
              <div className="flex justify-items-end gap-8 items-center ">
                <img
                  className="h-24 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                  src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                  alt=""
                />
                <Link className="hover:text-red-400">Hot Categories</Link>
              </div>
             
            </div>
          </SwiperSlide>
    
        </Swiper>
      </section>
    </div>
  );
};

export default PopularCategory;
