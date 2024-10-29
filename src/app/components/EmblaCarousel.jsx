// "use client"
// //import { useEmblaCarousel } from 'embla-carousel/react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Image from 'next/image';
// import { useCallback } from 'react'
// const EmblaCarousel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel();

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">

//           <div className="embla__slide"> <div
//               style={{ position: 'absolute' }}
//               data-key="rs-1"
//               data-title="Slide"
//               data-thumb="/revolution/images/slider-04-a.jpg"
//               data-anim="ms:1000;r:0;"
//               data-in="o:0;"
//               data-out="a:false;"
//             >
//               <Image
//                 src="/revolution/images/slider-04-a.jpg"
//                 alt=""
//                 title="slider-04-a"
//                 width={1920}
//                 height={700}
//                 className="rev-slidebg tp-rs-img rs-lazyload"
//                 data-lazyload="revolution/images/slider-04-a.jpg"
//                 data-bg="p:right bottom;"
//                 data-no-retina
//               />
//               <div
//                 id="slider-1-slide-1-layer-0"
//                 data-type="text"
//                 data-color="#1b2024"
//                 data-rsp_ch="on"
//                 data-xy="xo:45px,37px,62px,38px;yo:174px,143px,123px,95px;"
//                 data-text="w:normal;s:55,45,34,28;l:80,66,50,36;fw:300;"
//                 data-frame_0="x:50,41,31,19;"
//                 data-frame_1="st:1550;sp:1000;sR:1550;"
//                 data-frame_999="o:0;st:w;sR:6450;"
//                 style={{ zIndex: 8, fontFamily: 'Biryani' }}
//               >
//                 Relocate with <br /><strong>Assurance and Power</strong>
//               </div>

//               {/* Additional layers can be structured similarly */}
//               {/* Example for the first layer */}
//               <div
//                 id="slider-1-slide-1-layer-2"
//                 data-type="text"
//                 data-color="#161922"
//                 data-rsp_ch="on"
//                 data-xy="xo:49px,40px,63px,38px;yo:352px,290px,235px,144px;"
//                 data-text="w:normal;s:16,13,14,10;l:24,19,14,8;fw:600;"
//                 data-vbility="t,t,f,f"
//                 data-frame_0="x:175%;o:1;"
//                 data-frame_1="e:power3.out;st:2500;sp:1000;sR:2500;"
//                 data-frame_999="o:0;st:w;sR:5500;"
//                 style={{ zIndex: 10, fontFamily: 'Nunito Sans' }}
//               >
//                 Embrace a smooth and secure move, backed by dependable service and the strength to handle every challenge.<br />
//               </div>

//               {/* Add more layers here following the same pattern */}
//             </div></div>

//           <div className="embla__slide"><div
//               style={{ position: 'absolute' }}
//               data-key="rs-2"
//               data-title="Slide"
//               data-thumb="/revolution/images/slider-04-b.jpg"
//               data-anim="ms:1000;r:0;"
//               data-in="o:0;"
//               data-out="a:false;"
//             >
//               <Image
//                 src="/revolution/images/slider-04-b.jpg"
//                 alt=""
//                 title="slider-04-b"
//                 width={1920}
//                 height={700}
//                 className="rev-slidebg tp-rs-img rs-lazyload"
//                 data-lazyload="/revolution/images/slider-04-b.jpg"
//                 data-bg="p:right bottom;"
//                 data-no-retina
//               />
//               {/* Repeat layers for the second slide */}
//             </div></div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default EmblaCarousel;

// components/EmblaCarousel.js

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App({slides}) {
  return (
    <>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
        <SwiperSlide>
          {" "}
          <div>
            <Image
             src={slide.image}
              alt=""
              title="slider-04-a"
              width={1920}
              height={700}
              className="rev-slidebg tp-rs-img rs-lazyload"
            />
            <div>
            {slide.title}
            </div>
            <div>
            <p>{slide.description}</p>
              <br />
            </div>
          </div>
        </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      </Swiper>
    </>
  );
}
