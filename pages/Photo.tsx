import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Nav from "./components/Nav";
import { Navigation } from 'swiper';

function Photo(){

    return(
        <div className="container-fluid">
            <h1>hello world</h1>
            <Nav />
            <div className="swiper">  
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                className="mySwiper"
                >  
            {
                [1,2,3,4,5].map((rony)=>{
                    return(
                        <div key={rony}>
                            <SwiperSlide><Image src={`/${rony}.avif`} alt="car" width="600" height="420" /></SwiperSlide>
                        </div>
                    )
                })
            }
            </Swiper>
           
  </div>
  
        </div>
    )
}

export default Photo;