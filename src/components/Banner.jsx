import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Banner = () => {
    return (
      <div className="w-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[300px] md:h-[570px] relative" // Chiều cao thay đổi theo màn hình
        >
          <SwiperSlide>
            <div className="w-full h-full bg-red-300 relative">
              <img
                src="/bao cap-01.jpg"
                alt="banner 1"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full h-full bg-red-300 relative">
              <img
                src="/bao cap-02.jpg"
                alt="banner 1"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="w-full h-full bg-red-300 relative">
              <img
                src="/bao cap-03.jpg"
                alt="banner 1"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 và 3 tương tự */}
        </Swiper>
      </div>
    );
  };
  
  export default Banner;

