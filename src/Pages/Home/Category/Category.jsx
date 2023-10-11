import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide11.jpg'
import slide2 from '../../../assets/home/slide21.jpg'
import slide3 from '../../../assets/home/slide31.jpg'
import slide4 from '../../../assets/home/slide41.png'
import slide5 from '../../../assets/home/slide51.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle 
                subheading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide><img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Deserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salad</h3>
                </SwiperSlide>
                {/* <SwiperSlide><img src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salad</h3>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" />
            
            </SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" />
            
            </SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" />
            
            </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Category;