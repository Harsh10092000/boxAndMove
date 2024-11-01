import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import WhyChooseUsSlider from "./components/WhyChooseUsSlider";
import ReviewsSlider from "./components/ReviewsSlider";
export default function Home() {
  const slides1 = [
    {
      image: "/revolution/images/slider-04-a.jpg",
      title: "Relocate with Assurance and Power",
      description:
        "Embrace a smooth and secure move, backed by dependable service and the strength to handle every challenge.",
      iconTitle: "Faster",
    },
    {
      image: "/revolution/images/slider-04-b.jpg",
      title: "The smartest move you'll ever make.",
      description:
        "Choose a move that's efficient, reliable, and tailored to your needs for a seamless experience.",
      iconTitle: "Faster" ,
    },
  ];



  const chooseusSlides = [
    {
      image: '/images/homepage-4/service/service-01.jpg',
      heading1: 'Commercial Movers',
      heading2: 'Residential Moves',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-02.jpg',
      heading1: 'Door to Door',
      heading2: 'Condo & apartment moving',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-03.jpg',
      heading1: 'International Moving',
      heading2: 'Storage Service',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-04.jpg',
      heading1: 'Local Moving',
      heading2: 'Commercial & Office Movers',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-05.jpg',
      heading1: 'Moving Locally',
      heading2: 'Personalized packing services',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-06.jpg',
      heading1: 'Residential Moving',
      heading2: 'Dismantling & Assembling',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-07.jpg',
      heading1: 'International Moving',
      heading2: 'Storage Service',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-08.jpg',
      heading1: 'Commercial Movers',
      heading2: 'Junk Removal Service',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    },
    {
      image: '/images/homepage-4/service/service-09.jpg',
      heading1: 'Moving Locally',
      heading2: 'Long distance moving',
      description: 'Extreme attention to detail is the essence of Boo’s unique.'
    }
  ];


  const reviewsCounter = [
    {
      icon: "pbmit-moversco-business-icon-headset-1",
      count: 1784,
      label: "Satisfied Clients We Have Served"
    },
    {
      icon: "pbmit-moversco-business-icon-order",
      count: 1348,
      label: "Overall Boxed are moved at a time"
    },
    // Add more counters as needed
  ];

  const services = [
    {
      title: "Make your",
      strongText: "reservation",
      icon: "pbmit-moversco-business-icon-truck",
      desc: "Explore the features",
    },
    {
      title: "Load your",
      strongText: "container",
      icon: "pbmit-moversco-business-icon-delivery-truck",
      desc: "Explore the features",
    },
    {
      title: "We'll take it",
      strongText: "from there",
      icon: "pbmit-moversco-business-icon-house",
      desc: "Explore the features",
    },
  ];
  

  const reviewsSlides = [
    {
      author: "Victoria Porter",
      role: "Customer",
      text: "Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.",
      stars: 5,
    },
    {
      author: "John Smith",
      role: "Building Owner",
      text: "Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.",
      stars: 5,
    },
    {
      author: "Allien John",
      role: "Customer",
      text: "Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.",
      stars: 5,
    },
  ];
  


  const newsSlides = [
    {
      "id": 1,
      "date": "08",
      "month": "Aug",
      "category": "International Moving",
      "title": "Our Home Entertainment has Evolved Significantly",
      "image": "/images/homepage-4/blog/blog-01.jpg",
      "link": "blog-single-view.html"
    },
    {
      "id": 2,
      "date": "18",
      "month": "Feb",
      "category": "International Moving",
      "title": "These Are The Voyages of The Starship Enterprise",
      "image": "/images/homepage-4/blog/blog-02.jpg",
      "link": "blog-single-view.html"
    },
    {
      "id": 3,
      "date": "21",
      "month": "Jan",
      "category": "Transports Takecare",
      "title": "Three Reasons Visibility Matters in Supply Chain",
      "image": "/images/homepage-4/blog/blog-03.jpg",
      "link": "blog-single-view.html"
    }
  ]

  const features = [
    {
      icon: "pbmit-moversco-business-icon-shield",
      title: "Transparent Pricing"
    },
    {
      icon: "pbmit-moversco-business-icon-logistics-delivery",
      title: "Fast and efficient moving"
    },
    {
      icon: "pbmit-moversco-business-icon-house",
      title: "Warehouse storage"
    }
  ];

  return (
    <>
      <Header />
      <div><HeroSlider slides={slides1} /></div>

      <div className="pbmit-slider-area">
        {/* START Homeslider4 REVOLUTION SLIDER 6.5.15 */}
        <p className="rs-p-wp-fix"></p>
        <div
          id="rev_slider_4_1_wrapper"
          data-alias="homeslider4"
          data-source="gallery"
          style={{
            visibility: "hidden",
            background: "transparent",
            padding: 0,
            margin: "0 auto",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <div id="rev_slider_4_1" data-version="6.5.15">
            <div className="rs-slides">
              <div
                style={{ position: "absolute" }}
                data-key="rs-1"
                data-title="Slide"
                data-thumb="/revolution/images/slider-04-a.jpg"
                data-anim="ms:1000;r:0;"
                data-in="o:0;"
                data-out="a:false;"
              >
                <Image
                  src="/revolution/images/slider-04-a.jpg"
                  alt=""
                  title="slider-04-a"
                  width={1920}
                  height={700}
                  className="rev-slidebg tp-rs-img rs-lazyload"
                  data-lazyload="revolution/images/slider-04-a.jpg"
                  data-bg="p:right bottom;"
                  data-no-retina
                />
                <div
                  id="slider-1-slide-1-layer-0"
                  data-type="text"
                  data-color="#1b2024"
                  data-rsp_ch="on"
                  data-xy="xo:45px,37px,62px,38px;yo:174px,143px,123px,95px;"
                  data-text="w:normal;s:55,45,34,28;l:80,66,50,36;fw:300;"
                  data-frame_0="x:50,41,31,19;"
                  data-frame_1="st:1550;sp:1000;sR:1550;"
                  data-frame_999="o:0;st:w;sR:6450;"
                  style={{ zIndex: 8, fontFamily: "Biryani" }}
                >
                  Relocate with <br />
                  <strong>Assurance and Power</strong>
                </div>

                {/* Additional layers can be structured similarly */}
                {/* Example for the first layer */}
                <div
                  id="slider-1-slide-1-layer-2"
                  data-type="text"
                  data-color="#161922"
                  data-rsp_ch="on"
                  data-xy="xo:49px,40px,63px,38px;yo:352px,290px,235px,144px;"
                  data-text="w:normal;s:16,13,14,10;l:24,19,14,8;fw:600;"
                  data-vbility="t,t,f,f"
                  data-frame_0="x:175%;o:1;"
                  data-frame_1="e:power3.out;st:2500;sp:1000;sR:2500;"
                  data-frame_999="o:0;st:w;sR:5500;"
                  style={{ zIndex: 10, fontFamily: "Nunito Sans" }}
                >
                  Embrace a smooth and secure move, backed by dependable service
                  and the strength to handle every challenge.
                  <br />
                </div>

                {/* Add more layers here following the same pattern */}
              </div>

              {/* Second Slide */}
              <div
                style={{ position: "absolute" }}
                data-key="rs-2"
                data-title="Slide"
                data-thumb="/revolution/images/slider-04-b.jpg"
                data-anim="ms:1000;r:0;"
                data-in="o:0;"
                data-out="a:false;"
              >
                <Image
                  src="/revolution/images/slider-04-b.jpg"
                  alt=""
                  title="slider-04-b"
                  width={1920}
                  height={700}
                  className="rev-slidebg tp-rs-img rs-lazyload"
                  data-lazyload="/revolution/images/slider-04-b.jpg"
                  data-bg="p:right bottom;"
                  data-no-retina
                />
                {/* Repeat layers for the second slide */}
              </div>
            </div>
          </div>
        </div>
        {/* END REVOLUTION SLIDER */}
      </div>
      <div className="page-content demo-four">
        {/* About Start  */}
        <section className="about-section-four">
          <div className="container">
            <div className="pbmit-heading-subheading-style-1 text-center">
              <h4 className="pbmit-subtitle">we moving safely</h4>
              <h2 className="pbmit-title">
                Safe Moving <strong> Procedures. </strong>
              </h2>
            </div>
            <div className="row">
              {services.map((item) => (
 <div className="col-md-6 col-lg-4">
 <div className="pbminfotech-ihbox-style-7">
   <div className="pbminfotech-ihbox-inner">
     <div className="pbminfotech-ihbox-contents">
       <div className="pbminfotech-vc_general">
         <div className="pbminfotech-vc_cta3_content-container">
           <div className="pbminfotech-vc_cta3-content">
             <div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
               <div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                 <h2 className="pbminfotech-custom-heading">
                   {item.title} <strong>{item.strongText}</strong>
                 </h2>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="pbminfotech-vc_btn3-container pbminfotech-vc_btn3-inline">
       <a className="pbminfotech-vc_general" href="#" title="">
         {item.desc}
       </a>
     </div>
     <div className="pbminfotech-ihbox-icon pbminfotech-large-icon">
       <div className="pbminfotech-ihbox-icon-wrapper">
         <i className={`{pbmit-moversco-business-icon ${item.icon}`}></i>
       </div>
     </div>
   </div>
 </div>
</div>
              ))}
             
             
            </div>
          </div>
        </section>
        {/* About End */}
        {/* 
 Progressbar Start */}
        <section className="progressbar-four">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="counter-four-bg"></div>
              </div>
              <div className="col-md-6">
                <div className="progressbar-four-box">
                  <div className="pbmit-heading-subheading-style-1">
                    <h4 className="pbmit-subtitle">who we are</h4>
                    <h2 className="pbmit-title">
                      About<strong> Us</strong>
                    </h2>
                  </div>
                  <strong>Move happily to your new space</strong>
                  <p>
                    The goal of Boxnmove Squad is to become Canada's top local
                    moving company. Because we offer expert services
                    around-the-clock, every day of the week, we help you have a
                    less stressful Moving Day. You will have professionals at
                    your side from beginning to end if you choose us. It's
                    Possible to Move Without Stress. Make a call Call +1 (226)
                    899-2461 right now to receive a free relocation quote.
                  </p>

                  <p>
                    Building limitations, homeowners' association dues, and
                    stringent moving regulations are just a few of the
                    difficulties that come with moving. Allow our skilled Raptor
                    movers to handle everything if you lack the time to handle
                    them all. Our knowledgeable staff makes sure you can easily
                    complete all of these criteria. You may rely on us to
                    facilitate a seamless move into your new residence by
                    coordinating with building management. There is just one
                    name you can rely on for stress-free moves. The moving firm
                    that serves customers in Toronto, Hamilton, Cambridge,
                    Brampton, Montreal, and the surrounding areas is called
                    Raptor Movers Squad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Progressbar End  */}

        {/* Appointment Start  */}
        <section id="request-a-quote">
          <div className="appointment-four-bg pbmit-heading-color">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="pbmit-heading-subheading-style-1">
                    <h4 className="pbmit-subtitle">focused on quality</h4>
                    <h2 className="pbmit-title">
                      Step Forward with{" "}
                      <strong>Confidence and Stability</strong>
                    </h2>
                  </div>
                </div>
                <div className="col-md-6">
      <div className="appointment-four-ihbox">
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="pbminfotech-ihbox-style-9">
                <div className="pbminfotech-ihbox-inner">
                  <div className="pbminfotech-ihbox-icon pbminfotech-large-icon pbminfotech-icon-skincolor">
                    <div className="pbminfotech-ihbox-icon-wrapper">
                      <i className={`pbmit-moversco-business-icon ${feature.icon}`}></i>
                    </div>
                  </div>
                  <div className="pbminfotech-ihbox-contents">
                    <div className="pbminfotech-vc_general pbminfotech-vc_cta3">
                      <div className="pbminfotech-vc_cta3_content-container">
                        <div className="pbminfotech-vc_cta3-content">
                          <div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
                            <div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                              <h2 className="pbminfotech-custom-heading">
                                {feature.title}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
              </div>
            </div>
          </div>
          <div className="tab-four-box">
            <div className="container">
              <div className="pbmit-tab-style-1">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab-2-1"
                      aria-selected="true"
                      role="tab"
                    >
                      <i className="pbmit-base-icon-shop"></i>
                      <span>Request a quote</span>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2-2"
                      aria-selected="false"
                      role="tab"
                      tabIndex="-1"
                    >
                      <i className="pbmit-base-icon-globe"></i>
                      <span>Worldwide Network</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane show active"
                    id="tab-2-1"
                    role="tabpanel"
                  >
                    <div className="pbmit-column-inner">
                      <div className="row">
                        <div className="col-md-8">
                          <form action="" method="post" autoComplete="off">
                            <div className="tp-contact-form">
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Move Date</label>
                                  <input
                                    type="date"
                                    name="dob"
                                    placeholder="DOB*"
                                    required=""
                                    className="form-control c1"
                                    style={{ minWidth: "95%" }}
                                  />
                                  <p className="error"></p>
                                </div>
                                <div className="col-md-6">
                                  <label>Moving Sizes</label>
                                  <select className="form-control">
                                    <option>Select Size</option>
                                    <option>10x30 Storage Unit</option>
                                    <option>Office Move </option>
                                    <option>20 X 15 </option>
                                    <option>Room or Less</option>
                                    <option>Box Delivery</option>
                                    <option>Studio Apartment</option>
                                    <option>1 Bedroom Apartment</option>
                                    <option>2 Bedroom Apartment</option>
                                    <option>3 Bedroom Apartment</option>
                                    <option>2 Bedroom House</option>
                                    <option>2 Bedroom House(large)</option>
                                    <option>3 Bedroom House</option>
                                    <option>3 Bedroom House(large)</option>
                                    <option>4 Bedroom House</option>
                                    <option>4 Bedroom House(large)</option>
                                    <option>5 Bedroom House</option>
                                    <option>5 Bedroom House(large)</option>
                                    <option>5x5 Storage Unit</option>
                                    <option>5x10 Storage Unit</option>
                                    <option>5x15 Storage Unit</option>
                                    <option>10x10 Storage Unit</option>
                                    <option>10x15 Storage Unit</option>
                                    <option>10x20 Storage Unit</option>
                                  </select>
                                  <p className="error"></p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Full Name</label>
                                  <input
                                    type="text"
                                    pattern="[A-Za-z]+( [A-Za-z]+)*"
                                    name="b_name"
                                    placeholder="Your Name*"
                                    required=""
                                    className="form-control"
                                  />
                                  <p className="error"></p>
                                </div>
                                <div className="col-md-6">
                                  <label>Your Email</label>
                                  <input
                                    type="email"
                                    name="b_email"
                                    placeholder="Your Email*"
                                    required=""
                                    className="form-control"
                                  />
                                  <p className="error"></p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Phone No.</label>
                                  <input
                                    type="tel"
                                    name="b_phone"
                                    placeholder="Your Phone*"
                                    required=""
                                    className="form-control"
                                  />
                                  <p className="error"></p>
                                </div>
                                <div className="col-md-6">
                                  <label>Phone Type</label>
                                  <select
                                    className="wide form-control"
                                    name="service"
                                    required=""
                                  >
                                    <option value="">Select</option>
                                    <option value="">Home</option>
                                    <option value="">Office</option>
                                    <option value="">Mobile</option>
                                  </select>
                                  <p className="error"></p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Origin Address / Postal Code</label>
                                  <input
                                    type="text"
                                    name="origin_address"
                                    placeholder="Origin "
                                    required=""
                                    className="form-control"
                                  />
                                  <p className="error"></p>
                                </div>
                                <div className="col-md-6">
                                  <label>
                                    Destination Address / Postal Code
                                  </label>
                                  <input
                                    type="text"
                                    name="destination_address"
                                    placeholder="Destination"
                                    required=""
                                    className="form-control"
                                  />
                                  <p className="error"></p>
                                </div>
                              </div>
                              {/* <select className="wide form-control" name="service" required="">
                <option value="">Select Service</option>
                <option value="">Residential Moving</option>
                <option value="">Condo &amp; apartment moving</option>
                <option value="">Commercial &amp; Office Movers</option>
                <option value="">Personalized packing services</option>
                <option value="">Dismantling &amp; Assembling</option>
                <option value="">Storage Service</option>
                <option value="">Junk Removal Service</option>
                <option value="">Long distance moving</option>
              </select>  */}

                              {/* <textarea name="b_message" placeholder="Message Here..." className="form-control" cols="30" rows="20"></textarea>  */}

                              <input
                                type="submit"
                                name="submit"
                                className="pbmit-btn pbmit-btn-hover-global"
                                value="Submit"
                              />
                            </div>
                          </form>
                        </div>
                        <div className="col-md-4">
                          <div className="single-image-wrapper">
                            {/* <Image
                              src="/images/homepage-4/form-img.png"
                              width={100}
                              height={100}
                              className="img-fluid"
                              alt=""
                            /> */}
                            <picture>
  
  <img src="/images/homepage-4/form-img.png" alt="" className="img-fluid" loading="lazy" />
</picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2-2" role="tabpanel">
                    <div className="pbmit-column-inner">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="single-map-image">
                            {/* <Image
                              src="/images/homepage-4/map-02.png"
                              width={100}
                              height={100}
                              className="img-fluid"
                              alt=""
                            /> */}
                             <picture>
  
  <img src="/images/homepage-4/map-02.png" alt="" className="img-fluid" loading="lazy" />
</picture>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="single-image-wrapper">
                            {/* <Image
                              src="/images/homepage-4/form-img.png"
                              width={100}
                              height={100}
                              className="img-fluid"
                              alt=""
                            /> */}
 <picture>
  
  <img src="/images/homepage-4/form-img.png" alt="" className="img-fluid" loading="lazy" />
</picture>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Appointment End */}

        {/* Service Start */}
        <section className="service-slider-four">
          <div className="container">
            <div className="service-four-content">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="pbmit-heading-subheading-style-1">
                    <h4 className="pbmit-subtitle">why choose us?</h4>
                    <h2 className="pbmit-title">
                      We give you complete <strong> better services . </strong>
                    </h2>
                  </div>
                </div>
                <div className="col-md-7">
                  <p>
                    Our team discussed every single detail to make sure Boo is
                    the most versatile and unique theme created so far. Our team
                    discussed every single detail to make sure Boo is the most
                    versatile and unique theme created so far.
                  </p>
                </div>
              </div>
            </div>

            <WhyChooseUsSlider slides={chooseusSlides} />

            
          </div>
        </section>
        {/* Service End  */}

        {/* Testimonial Start  */}
        <section className="testimonial-four">
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-lg-12 col-xl-6">
                <div className="video-four-box pbmit-textcolor-white">
                  <div className="video-four-button-bg">
                    <div className="video-four-play-button">
                      <span>
                        <i className="themifyicon ti-control-play"></i>
                      </span>
                      <a
                        className="pbmin-lightbox-video"
                        href="https://www.youtube.com/watch?v=g-D0PE2XotQ"
                      ></a>
                    </div>
                  </div>
                  <div className="counter-four-box">
      <div className="row">
        {reviewsCounter.map((counter, index) => (
          <div className="col-md-5" key={index}>
            <div className="pbminfotech-fidbox-style-4">
              <div className="pbminfotech-fld-contents">
                <div className="pbminfotech-ihbox-icon pbminfotech-large-icon pbminfotech-icon-skincolor">
                  <div className="pbminfotech-sbox-icon-wrapper">
                    <i className={`pbmit-moversco-business-icon ${counter.icon}`}></i>
                  </div>
                </div>
                <div className="pbminfotech-fld-contents-wrap">
                  <div className="pbminfotech-fid-inner">
                    <span
                      data-appear-animation="animateDigits"
                      data-from="0"
                      data-to={counter.count}
                      data-interval="5"
                      className="numinate"
                    >
                      {counter.count.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="pbminfotech-fid-title">
                    <span>
                      {counter.label}
                      <br />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-2"></div>
      </div>
    </div>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="testimonial-four-box">
                  <div className="row">
                    <div className="col-lg-12 col-xl-5">
                      <div className="pbmit-heading-subheading-style-1">
                        <h4 className="pbmit-subtitle">Our Clients Say</h4>
                        <h2 className="pbmit-title">
                          We Love Clients <strong> They Love Us </strong>
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-7">
                      <p>
                        Our team discussed every single detail to make sure Boo
                        is the most versatile and unique theme created so far.
                        Our team discussed every single.
                      </p>
                    </div>
                  </div>

<ReviewsSlider slides={reviewsSlides} />

                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial End */}

        {/* Blog Start  */}
        <section className="section-lgb">
          <div className="container">
            <div className="blog-four-contant">
              <div className="row align-items-center">
                <div className="col-md-12 col-lg-5">
                  <div className="pbmit-heading-subheading-style-1">
                    <h4 className="pbmit-subtitle">Latest Update</h4>
                    <h2 className="pbmit-title">
                      Let's Checkout our All <strong> Latest News </strong>
                    </h2>
                  </div>
                </div>
                <div className="col-md-12 col-lg-5">
                  <p>
                    Our team discussed every single detail to make sure Boo is
                    the most versatile and unique theme created so far. Now were
                    up in the big leagues getting’ our turn at bat.{" "}
                  </p>
                </div>
                <div className="col-md-12 col-lg-2">
                  <div className="blog-four-button">
                    <a
                      href="blog-grid-view.html"
                      className="pbmit-btn pbmit-btn-hover-global"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
      {newsSlides.map(post => (
        <div className="col-md-6 col-lg-4" key={post.id}>
          <article className="pbminfotech-box-blog pbminfotech-blogbox-style-4">
            <div className="post-item">
              <div className="pbminfotech-blog-image-with-meta">
                <div className="pbminfotech-featured-wrapper pbminfotech-post-featured-wrapper pbminfotech-post-format-">
                  <picture>
                    <img src={post.image} alt="" className="img-fluid" loading="lazy" />
                  </picture>
                </div>
              </div>
              <div className="pbminfotech-meta-date-wrapper">
                <span className="pbminfotech-meta-date">{post.date}</span>
                <span className="pbminfotech-meta-month">{post.month}</span>
              </div>
              <div className="pbminfotech-box-content">
                <span className="pbmit-meta-line cat-links">
                  <a href={post.link}>{post.category}</a>
                </span>
                <div className="pbminfotech-box-title">
                  <h4>
                    <a href={post.link}>{post.title}</a>
                  </h4>
                </div>
                <div className="pbmit-blogbox-readmore">
                  <div className="pbminfotech-blogbox-footer-left">
                    <a href={post.link}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
          </div>
        </section>
        {/* Blog End  */}
      </div>
      <Footer />
    </>
  );
}
