import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import AboutUsSlider from "../components/AboutUsSlider";
const About = () => {
  const avoutUsPoints = [
    {
      title: "Who We Are",
      description:
        "At BoxNMove, we understand that moving can be a daunting task, filled with numerous challenges and uncertainties. That's why we have built a team of highly skilled professionals who are committed to providing top-notch moving services tailored to meet your specific needs. Whether you're moving across town or across the country, our expertise ensures that your belongings are handled with care and precision.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide reliable, efficient, and stress-free moving services to our customers, ensuring their belongings are safely transported.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to be the leading moving services provider in Canada, known for our excellence, reliability, and customer-centric approach.",
    },
  ];

  const aboutUsServices = [
    {
      title: "Within City",
      icon: "pbmit-moversco-business-icon-truck",
      description:
        "We provide local moving services designed to make your move across town smooth and hassle-free.",
    },
    {
      title: "Outside City",
      icon: "pbmit-moversco-business-icon-parcel",
      description:
        "Our comprehensive services are designed to handle every aspect of your relocation.",
    },
    {
      title: "Internationally",
      icon: "pbmit-moversco-business-icon-box",
      description:
        "We are committed to making your international move as efficient and stress-free as possible.",
    },
  ];

  const aboutUsChoose = [
    {
      heading: `Experience and Expertise`,
      icon: "fa fa-certificate",
      description:
        "With years of experience in the moving industry, our team has honed their skills to handle all types of moves, whether residential or commercial. We know the best practices to ensure a smooth and efficient move.",
    },
    {
      heading: "Professional and Trained Staff",
      icon: "fa fa-user-circle-o",
      description:
        "Our movers are professionally trained, courteous, and dedicated to providing exceptional service. They handle your belongings with care and respect, ensuring they arrive at your new location safely.",
    },
    {
      heading: "Customer Satisfaction",
      icon: "fa fa-users",
      description:
        "Our top priority is customer satisfaction. We strive to exceed your expectations by providing personalized service and addressing any concerns promptly. Our numerous positive reviews and repeat customers are a testament to our commitment.",
    },
    {
      heading: "Comprehensive Services",
      icon: "fa fa-tasks",
      description:
        "We offer a wide range of services, including packing, loading, unloading, and unpacking. We can also provide packing materials and storage solutions if needed.",
    },
    {
      heading: "Transparent Pricing",
      icon: "fa fa-usd",
      description:
        "We understand the importance of time during a move. Our team is reliable and punctual, ensuring your move is completed on schedule.",
    },
    {
      heading: "Insured and Licensed",
      icon: "fa fa-id-card-o",
      description:
        "We are fully licensed and insured, giving you peace of mind knowing that your belongings are protected throughout the moving process.",
    },
    {
      heading: "Customized Moving Plans",
      icon: "pbmit-moversco-business-icon-truck",
      description:
        "We tailor our services to meet your specific needs, whether you require a full-service move or just need help with certain aspects. Our flexible options ensure a stress-free experience.",
    },
    {
      heading: "Reliable and Punctual",
      icon: "fa fa-calendar",
      description:
        "We understand the importance of time during a move. Our team is reliable and punctual, ensuring your move is completed on schedule.",
    },
  ];


 const aboutUsSlider = [
    {
      title: "Residential Moving",
      image: "images/about-us-03/service/service-01.jpg",
      link: "residentialMoving.php"
    },
    {
      title: "Condo & Apartment Moving",
      image: "images/about-us-03/service/service-02.jpg",
      link: "CondoApartmentMoving.php"
    },
    {
      title: "Commercial & Office Moving",
      image: "images/about-us-03/service/service-04.jpg",
      link: "CommercialOfficeMoving.php"
    },
    {
      title: "Personalized Packing Services",
      image: "images/about-us-03/service/service-03.jpg",
      link: "PersonalizedPackingServices.php"
    },
    {
      title: "Dismantling & Assembling",
      image: "images/about-us-03/service/service-05.jpg",
      link: "DismantlingAssembling.php"
    },
    {
      title: "Storage Service",
      image: "images/about-us-03/service/service-07.jpg",
      link: "StorageService.php"
    },
    {
      title: "Condo & Apartment Moving",
      image: "images/about-us-03/service/service-06.jpg",
      link: "CondoApartmentMoving.php"
    },
    {
      title: "Junk Removal Service",
      image: "images/about-us-03/service/service-08.jpg",
      link: "JunkRemovalService.php"
    },
    {
      title: "Long Distance Moving Service",
      image: "images/about-us-03/service/service-09.jpg",
      link: "LongDistanceMoving.php"
    }
  ]

  return (
    <>
      <Header />
      {/* Title Bar  */}
      <div class="pbmit-title-bar-wrapper">
        <div class="container">
          <div class="pbmit-title-bar-content">
            <div class="pbmit-title-bar-content-inner">
              <div class="pbmit-tbar">
                <div class="pbmit-tbar-inner container">
                  <h1 class="pbmit-tbar-title">About Us</h1>
                </div>
              </div>
              <div class="pbmit-breadcrumb">
                <div class="pbmit-breadcrumb-inner">
                  <span>
                    <Link title="" href="/" class="home">
                      <span>Home</span>
                    </Link>
                  </span>
                  <span class="sep">-</span>
                  <span>
                    <span class="post-root post post-post current-item">
                      About Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title Bar End */}

      {/* Page Content  */}
      <div class="page-content about-us_03">
        {/* About Start  */}
        <section>
          <div class="container">
            <div class="about-section">
              <div class="row g-0">
                <div class="col-md-12 col-xl-5">
                  <picture>
                    <img
                      src="images/about-us-03/about-us-01.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </picture>
                </div>
                <div class="col-md-12 col-xl-7">
                  <div class="about-right_box">
                    <div class="pbmit-heading-subheading-style-4">
                      <h4 class="pbmit-subtitle">About Us</h4>
                      <h2 class="pbmit-title">Your Trusted Moving Partner</h2>
                    </div>
                    <p>
                      Welcome to BoxNMove, your trusted moving partner in
                      Canada! With a passion for delivering exceptional moving
                      experiences, we are dedicated to making your relocation
                      process smooth, efficient, and stress-free.
                    </p>
                    {avoutUsPoints.map((item, index) => (
                      <>
                        <h4>{item.title}</h4>
                        <p> {item.description}</p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Start  */}

        {/* Inbox Start  */}
        <section class="ihbox_section">
          <div class="container">
            <div class="row">
              {aboutUsServices.map((item) => (
                <div class="col-md-6 col-xl-4">
                  <div class="pbminfotech-ihbox-style-13">
                    <div class="pbminfotech-ihbox-inner">
                      <div class="pbminfotech-ihbox-icon pbminfotech-large-icon">
                        <div class="pbminfotech-ihbox-icon-wrapper">
                          <i
                            class={`pbmit-moversco-business-icon ${item.icon}`}
                          ></i>
                        </div>
                      </div>
                      <div class="pbminfotech-ihbox-contents">
                        <div class="pbminfotech-vc_general">
                          <div class="pbminfotech-vc_cta3_content-container">
                            <div class="pbminfotech-vc_cta3-content">
                              <div class="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
                                <div class="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                                  <h2 class="pbminfotech-custom-heading">
                                    {item.title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pbminfotech-cta3-content-wrapper">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Inbox End  */}

         {/* Service Start  */}
	<section class="pbmit-bg-color-blackish service_seven">
		<div class="container pbmit-col-stretched-yes pbmit-col-right">
			<div class="pbmit-box-heading-wrapper">
				<div class="pbmit-heading-subheading-style-4 text-white">
					<h4 class="pbmit-subtitle">Our Services</h4>
					<h2 class="pbmit-title">We give best services.</h2>
				</div>
				<div class="service-seven-arrow swiper-btn-custom d-flex flex-row-reverse"></div>
			</div>
			<AboutUsSlider slides={aboutUsSlider} />
		</div>
	</section>
	
        {/* Service End  */}
        <section class="our-company-section-three">
          <div class="container">
            <div class="pbmit-heading-subheading text-center">
              <h4 class="pbmit-subtitle">Why Choose Us?</h4>
              <h2 class="pbmit-title"> Your satisfaction is our priority.</h2>
            </div>
            <div class="row g-0">
              {aboutUsChoose.map((item, index) => (
                <div class="col-xl-3 col-md-6">
                  <div class="pbminfotech-ihbox-style-5">
                    <div class="pbminfotech-ihbox-inner">
                      <div class="pbminfotech-ihbox-contents">
                        <div class="pbminfotech-vc_general">
                          <div class="pbminfotech-vc_cta3_content-container">
                            <div class="pbminfotech-vc_cta3-content">
                              <div class="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
                                <div class="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                                  <h2 class="pbminfotech-custom-heading ">
                                    {item.heading}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="pbminfotech-cta3-content-wrapper">
                          {item.description}
                        </div>
                      </div>
                      <div class="pbminfotech-ihbox-icon pbminfotech-large-icon pbminfotech-icon-skincolor">
                        <div class="pbminfotech-ihbox-icon-wrapper">
                          <i class={`${item.icon}`}></i>
                        </div>
                        <div class="pbminfotech-ihbox-big-number-text">01</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
