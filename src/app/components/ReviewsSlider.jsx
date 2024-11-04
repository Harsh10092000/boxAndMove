"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ReviewsSlider = ({slides}) => {
  return (
    <>
    
    <Swiper
       spaceBetween={30}
     // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          
        },
        
       
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      //navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      watchSlidesProgress={true} slidesPerView={1} 
    >
      {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <article className="pbminfotech-testimonialbox-style-5">
                          <div className="pbminfotech-post-item">
                            <div className="pbminfotech-box-content">
                              <div className="pbminfotech-box-star">
                                <i className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                                <i className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                                <i className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                                <i className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                                <i className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                              </div>
                              <div className="pbminfotech-box-desc">
                                <blockquote className="pbminfotech-testimonial-text">
                                  {slide.text}
                                </blockquote>
                              </div>
                              <div className="pbminfotech-box-author">
                                <div className="pbminfotech-box-title">
                                  <h3 className="pbminfotech-author-name">
                                    {slide.author}
                                  </h3>
                                  <span className="pbminfotech-box-footer">
                                    {slide.role}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
      </SwiperSlide>
      ))}
    </Swiper>
  </>
  )
}

export default ReviewsSlider
