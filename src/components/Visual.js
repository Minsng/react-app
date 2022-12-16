import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import '..//App.css';

function Visual() {
  SwiperCore.use([Navigation, Pagination, Scrollbar]);
  
  return (
    <div className="App">

       <div className="box">
        <Swiper slidesPerView={1} pagination={{clickable:true}} navigation={{clickable:true}} className="mySwiper1" >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
        </Swiper>
        </div>

        <div className="box">
        <Swiper slidesPerView={2} spaceBetween={10} loop={true}
        pagination={{clickable:true}} navigation={{clickable:true}}
        scrollbar={{ draggable: true }}  className="mySwiper2" >
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
        </Swiper>
        </div>

    </div>
  );
}

export default Visual;