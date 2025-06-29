import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AccessoriesAndParts = () => {

  return (
    <div>
      {/* accessories navbar  */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-3 mt-2">
          Accessories And Parts
        </h2>
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
      {/* grid section for accessories and parts  */}
      <section
        className="grid grid-cols-12 justify-center  gap-2 border-2
       border-red-500 p-2 "
      >
        {/* details for accessories and parts cart  */}
        <div className="lg:col-span-5 col-span-12 border-2 p-4 border-black">
          <div className="w-full ">
            <img className="rounded-md"
              src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
              alt="details"
            />
          </div>
          <button className="hover:bg-yellow-500 py-2 px-4 w-full mt-2  rounded-md text-black">
            Add To Cart
          </button>
          <div className="divider my-0.5"></div>
          <div>
            <h5 className="text-xs ">Automobiles</h5>
            <h4 className="hover:text-yellow-500 text-xl font-medium">
              Dummy product name
            </h4>
            <br />
            <p className="flex justify-end mr-6 text-lg font-semibold ">$ 446</p>
          </div>
        </div>
        {/* carts for accessories and parts  */}
        <div className="lg:col-span-7 col-span-12 gap-2 border-red-400 border-2 ">
          
            <Swiper
           
              spaceBetween={2}
              slidesPerView={"auto"}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}

            >
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col  space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48  rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn btn-md px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3   ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3   ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3   ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[100%] 
              md:!w-[50%] lg:!w-1/3   ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" !w-[100%] 
              md:!w-[50%] lg:!w-1/3  ">
                <div className="flex flex-col space-y-2 ">
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <br />
                    <Link className="hover:text-red-400">Hot Categories</Link>

                    <br />
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                  {/* second row for popularCategory slide */}
                  <div className=" p-2 hover:border-[1px] m-2 hover:border-yellow-500 rounded-md  ">
                    <img
                      className="h-48 rounded-lg hover:shadow-blue-900 hover:shadow-2xl "
                      src="https://i.ibb.co/wCPtVgc/close-up-view-cooking-with-fresh-vegetables-chopped-foods-black-table.jpg"
                      alt=""
                    />
                    <br />
                    <button className="btn w-full px-4 py-2 bg-amber-500 font-semibold ">
                      Add to cart
                    </button>
                    <Link className="hover:text-red-400">Hot Categories</Link>
                    <Link className="hover:text-red-400">
                      Product with video
                    </Link>
                    <p>Price: $ 400</p>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          
        </div>
      </section>
    </div>
  );
};

export default AccessoriesAndParts;
