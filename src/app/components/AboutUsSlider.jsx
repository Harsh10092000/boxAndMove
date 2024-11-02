"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from 'next/link';
const AboutUsSlider = ({slides}) => {
  return (
    <div class="pbmit-col-stretched-right">
				
							
                        <Swiper
         spaceBetween={30}
         centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        watchSlidesProgress={true} slidesPerView={4} 
      >
        {slides.map((slide, index) => (

        
<SwiperSlide key={index}>
							<article class="pbminfotech-servicebox-style-6">
								<div class="pbminfotech-post-item">
									<span class="pbminfotech-item-thumbnail">
										<span class="pbminfotech-item-thumbnail-inner">
                                            <picture>
											<img src={slide.image} class="img-fluid" alt="" />
                                            </picture>
                                        </span>
									</span>
									<div class="pbminfotech-box-content">
										<div class="pbminfotech-box-content-inner">
											<div class="pbminfotech-pf-box-title">
												<h3><Link href={slide.link} >{slide.title} </Link>
												</h3>
											</div>
											<div class="pbminfotech-box-link">
												<Link href={slide.link} >READ MORE</Link>
											</div>
										</div>
									</div>
								</div>
							</article>
                            </SwiperSlide>
                            ))}
                            </Swiper>
						</div>
						
					
  )
}

export default AboutUsSlider
