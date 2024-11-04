

// "use client";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// export default function HeroSlider({ slides }) {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         // autoplay={{
//         //   delay: 10000,
//         //   disableOnInteraction: false,
//         // }}
//         pagination={{
//           clickable: true,
//         }}
//         //navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="hero-slider">
//               <div className="hero-slider-wrapper">
//                 {/* <Image
//              src={slide.image}
//               alt=""
//               title="slider-04-a"
//               width={1920}
//               height={700}
//               className="rev-slidebg tp-rs-img rs-lazyload"
//             />*/}
//                 <div className="hero-heading">
//                   {/* {slide.title} */}
//                   Relocate with <br />
//                   <strong className="hero-heading-strong">
//                     Assurance and Power
//                   </strong>
//                 </div>
//                 <div>
//                   <p>{slide.description}</p>
//                   <br />

//                   <div>
//                     <ul className="d-flex banner-list">
//                       <li >
//                         <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-delivery-truck"></i>
//                         <br />
//                         <span> {slide.iconTitle}</span>
//                       </li>
                     
//                       <li>                      
//                         <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-parcel"></i>
//                         <br />
//                         <span>  Equipments</span>
//                       </li>
//                       <li>                      
//                         <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-truck"></i>
//                         <br />
//                         <span>Experience</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         {/* <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// }





"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider({ slides }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        //navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slider">
              <div className="hero-slider-wrapper">
                {/* <Image
             src={slide.image}
              alt=""
              title="slider-04-a"
              width={1920}
              height={700}
              className="rev-slidebg tp-rs-img rs-lazyload"
            />*/}
                <div className="hero-heading">
                  {/* {slide.title} */}
                  Relocate with <br />
                  <strong className="hero-heading-strong">
                    Assurance and Power
                  </strong>
                </div>
                <div>
                  <p>{slide.description}</p>
                  <br />

                  <div>
                    <ul className="d-flex banner-list">
                      <li >
                        <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-delivery-truck"></i>
                        <br />
                        <span> {slide.iconTitle}</span>
                      </li>
                     
                      <li>                      
                        <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-parcel"></i>
                        <br />
                        <span>  Equipments</span>
                      </li>
                      <li>                      
                        <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-truck"></i>
                        <br />
                        <span>Experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
