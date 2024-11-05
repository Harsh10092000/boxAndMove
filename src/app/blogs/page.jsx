import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const page = () => {
  return (
    <div>
      <Header />
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Blog Grid View</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home">
                      <span>MoversCO</span>
                    </a>
                  </span>
                  <span className="sep">-</span>
                  <span>
                    <span className="post-root post post-post current-item">
                      Blog Grid View
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title Bar End */}


      <div className="page-content">   

        <section className="blog-grid section-md">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                        <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Aug</span>08</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Our Home Entertainment has Evolved Significantly</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                    <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Feb</span>18</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">These Are The Voyages of The Starship Enterprise</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                    <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Jan</span>21</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Three Reasons Visibility Matters in Supply Chain</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                    <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Sep</span>29</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Its Mission Explore Strange to the New Worlds</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                        <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Sep</span>27</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Parking Shortage Worsens in Every City Nowadays</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                    <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Sep</span>23</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Truckers to Seek HOS Waiver to the Ease Calif</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog blog-classNameic">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                        <div className="swiper-slider" data-loop="false" data-autoplay="true" data-dots="true" data-arrows="false"  data-columns="1" data-margin="0" data-effect="slide">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">                           
                                         
                                                <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                                </div>
                                                <div className="swiper-slide">                           
                                                   
                                                <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                                </div>
                                                <div className="swiper-slide">                          
                                                  
                                                <picture><img src="images/blog/blog-01-new.jpg" className="img-fluid" alt=""/></picture>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Aug</span>15</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">Load Boards Show Flat Demand and Higher Rates</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-video">
                                        <iframe src="https://www.youtube.com/embed/mDonUudR6oU?feature=oembed"></iframe>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Aug</span>10</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">We ensures to you best the quality services</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <article className="pbminfotech-blogbox-style-3 pbminfotech-box-blog">
                            <div className="post-item">
                                <div className="pbminfotech-blog-image-with-meta">
                                    <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                                        <picture>
                                        <img src="images/blog/blog-08-new.jpg" className="img-fluid" alt="" />
                                        </picture>
                                    </div>
                                    <div className="pbminfotech-meta-date"><span>Aug</span>09</div>
                                </div>
                                <div className="pbminfotech-box-content">
                                    <div className="pbminfotech-box-title">
                                        <h4><a href="blog-single-view.html">We introduce new boat and flight service</a></h4>
                                    </div>
                                    <div className="pbmit-blogbox-readmore">
                                        <div className="pbminfotech-blogbox-footer-left">
                                            <a href="blog-single-view.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>


     </div>


      <Footer />
    </div>
  );
};

export default page;
