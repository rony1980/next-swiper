import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Nav from "./components/Nav";
import { Pagination, Autoplay } from 'swiper';
import Photo from "./Photo";

function Slider(){
const banner = ['banner1','banner2','banner3'];
    return(
        <div className="container-fluid">
            <Nav />
            
            <div className="swiper">  
            <Swiper
                modules={[Pagination,Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                >  
            {
                banner.map((rony)=>{
                    return(
                        <div key={rony}>
                            <SwiperSlide><Image src={`/${rony}.png`} alt="car" width={'1920'} height={600}  /></SwiperSlide>
                        </div>
                    )
                })
            }
            </Swiper>       
            </div>
            <Photo />
        </div>
    )
}

export default Slider;