"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function WhyChooseUsSlider({slides}) {
  return (
    <>
    
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        watchSlidesProgress={true} slidesPerView={3} 
      >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <article className="pbminfotech-servicebox-style-3">
                    <div className="pbminfotech-post-item">
                      <span className="pbminfotech-item-thumbnail">
                        <span className="pbminfotech-item-thumbnail-inner">
                          <Image
                            src="/images/homepage-4/service/service-02.jpg"
                            width={100}
                            height={100}
                            className="img-fluid"
                            alt=""
                          />
                        </span>
                      </span>
                      <div className="pbmit-ihbox-icon">
                        <i className="pbmit-moversco-business-icon pbmit-moversco-business-icon-headset-1"></i>
                      </div>
                      <div className="pbminfotech-box-content">
                        <div className="pbminfotech-box-content-inner">
                          <div className="pbminfotech-box-category">
                            <a href="#" rel="tag" tabIndex="0">
                              Door to Door
                            </a>
                          </div>
                          <div className="pbminfotech-pf-box-title">
                            <h3>
                              <a href="#" tabIndex="0">
                                Condo & apartment moving{" "}
                              </a>
                            </h3>
                          </div>
                          <div className="pbminfotech-service-content">
                            <p>
                              Extreme attention to detail is the essence of
                              Boo’s unique.
                            </p>
                          </div>
                          <div className="pbminfotech-box-link">
                            <a href="#" tabIndex="0">
                              READ MORE
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}