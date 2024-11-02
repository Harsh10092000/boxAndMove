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
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">About Us</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <Link title="" href="/" className="home">
                      <span>Home</span>
                    </Link>
                  </span>
                  <span className="sep">-</span>
                  <span>
                    <span className="post-root post post-post current-item">
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
      <div className="page-content about-us_03">
        {/* About Start  */}
        <section>
          <div className="container">
            <div className="about-section">
              <div className="row g-0">
                <div className="col-md-12 col-xl-5">
                  <picture>
                    <img
                      src="images/about-us-03/about-us-01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="col-md-12 col-xl-7">
                  <div className="about-right_box">
                    <div className="pbmit-heading-subheading-style-4">
                      <h4 className="pbmit-subtitle">About Us</h4>
                      <h2 className="pbmit-title">Your Trusted Moving Partner</h2>
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
        <section className="ihbox_section">
          <div className="container">
            <div className="row">
              {aboutUsServices.map((item) => (
                <div className="col-md-6 col-xl-4">
                  <div className="pbminfotech-ihbox-style-13">
                    <div className="pbminfotech-ihbox-inner">
                      <div className="pbminfotech-ihbox-icon pbminfotech-large-icon">
                        <div className="pbminfotech-ihbox-icon-wrapper">
                          <i
                            className={`pbmit-moversco-business-icon ${item.icon}`}
                          ></i>
                        </div>
                      </div>
                      <div className="pbminfotech-ihbox-contents">
                        <div className="pbminfotech-vc_general">
                          <div className="pbminfotech-vc_cta3_content-container">
                            <div className="pbminfotech-vc_cta3-content">
                              <div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
                                <div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                                  <h2 className="pbminfotech-custom-heading">
                                    {item.title}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbminfotech-cta3-content-wrapper">
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
	<section className="pbmit-bg-color-blackish service_seven">
		<div className="container pbmit-col-stretched-yes pbmit-col-right">
			<div className="pbmit-box-heading-wrapper">
				<div className="pbmit-heading-subheading-style-4 text-white">
					<h4 className="pbmit-subtitle">Our Services</h4>
					<h2 className="pbmit-title">We give best services.</h2>
				</div>
				<div className="service-seven-arrow swiper-btn-custom d-flex flex-row-reverse"></div>
			</div>
			<AboutUsSlider slides={aboutUsSlider} />
		</div>
	</section>
	
        {/* Service End  */}
        <section className="our-company-section-three">
          <div className="container">
            <div className="pbmit-heading-subheading text-center">
              <h4 className="pbmit-subtitle">Why Choose Us?</h4>
              <h2 className="pbmit-title"> Your satisfaction is our priority.</h2>
            </div>
            <div className="row g-0">
              {aboutUsChoose.map((item, index) => (
                <div className="col-xl-3 col-md-6">
                  <div className="pbminfotech-ihbox-style-5">
                    <div className="pbminfotech-ihbox-inner">
                      <div className="pbminfotech-ihbox-contents">
                        <div className="pbminfotech-vc_general">
                          <div className="pbminfotech-vc_cta3_content-container">
                            <div className="pbminfotech-vc_cta3-content">
                              <div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
                                <div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
                                  <h2 className="pbminfotech-custom-heading ">
                                    {item.heading}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbminfotech-cta3-content-wrapper">
                          {item.description}
                        </div>
                      </div>
                      <div className="pbminfotech-ihbox-icon pbminfotech-large-icon pbminfotech-icon-skincolor">
                        <div className="pbminfotech-ihbox-icon-wrapper">
                          <i className={`${item.icon}`}></i>
                        </div>
                        <div className="pbminfotech-ihbox-big-number-text">01</div>
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
