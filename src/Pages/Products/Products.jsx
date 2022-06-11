import React from "react";
import Card from "../../Components/Products/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/effect-coverflow";
import "./Products.css";
const Products = () => {
    return (
        <>
            <div id="latestproducts" className="conatiner d-flex mb-5">
                <div className="col-6 col-lg-4 py-3 ml-5">
                    <div className="py-3 text-center">
                        <h1 className="mb-4 fs-3">Discover More :<br /> 
                        {/* <span className="text-warning fst-italic fs-4">Cosmitics</span>  */}
                        </h1>
                    </div>
                </div>
                <div className=" container col-sm-6 col-lg-8">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                
                // loop={true}
                // loopFillGroupWithBlank={true}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                pagination={{
                    clickable: true,
                }}
                style={{
                    "--swiper-navigation-color": "rgb(230, 217, 152)",
                    "--swiper-pagination-color": "#fff",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
            </div>
            </div>
        </>
    );
}

export default Products;


