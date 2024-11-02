import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
    <Header />
      {/* Title Bar */}
      <div className="pbmit-title-bar-wrapper">
        <div className="container">
          <div className="pbmit-title-bar-content">
            <div className="pbmit-title-bar-content-inner">
              <div className="pbmit-tbar">
                <div className="pbmit-tbar-inner container">
                  <h1 className="pbmit-tbar-title">Contact Us</h1>
                </div>
              </div>
              <div className="pbmit-breadcrumb">
                <div className="pbmit-breadcrumb-inner">
                  <span>
                    <a title="" href="#" className="home">
                      <span>Home</span>
                    </a>
                  </span>
                  <span className="sep">-</span>
                  <span>
                    <span className="post-root post post-post current-item">
                      Contact Us
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title Bar End */}
      {/* Contact Us Content  */}
      <div className="page-content"> 

			
			<section>
				<div className="container"> 
					<div className="contact-box"> 
						<div className="row">
							<div className="col-md-4">
								<div className="pbminfotech-ihbox-style-6">
									<div className="pbminfotech-ihbox-inner">
										<div className="pbminfotech-ihbox-icon">
											<div className="pbminfotech-ihbox-icon-wrapper">
												<i className="themifyicon ti-location-pin"></i>
											</div>
										</div>
										<div className="pbminfotech-ihbox-contents">
											<div className="pbminfotech-vc_general pbminfotech-vc_cta3">
												<div className="pbminfotech-vc_cta3_content-container">
													<div className="pbminfotech-vc_cta3-content">
														<div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
															<div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
																<h2 className="pbminfotech-custom-heading ">Our Address</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="pbminfotech-cta3-content-wrapper"><a href="https://maps.app.goo.gl/PLeipvJ7Q6jS1sGK6"> 16 Sweet Clover Cres Brampton On L6R3A2</a></div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="pbminfotech-ihbox-style-6">
									<div className="pbminfotech-ihbox-inner">
										<div className="pbminfotech-ihbox-icon">
											<div className="pbminfotech-ihbox-icon-wrapper">
												<i className="themifyicon ti-headphone"></i>
											</div>
										</div>
										<div className="pbminfotech-ihbox-contents">
											<div className="pbminfotech-vc_general pbminfotech-vc_cta3">
												<div className="pbminfotech-vc_cta3_content-container">
													<div className="pbminfotech-vc_cta3-content">
														<div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
															<div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
																<h2 className="pbminfotech-custom-heading ">Phone Number</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="pbminfotech-cta3-content-wrapper"><a href="tel:+14373131965"> +1 (437) 313‐1965 </a><br /><a href="tel:+12268992461"> +1 (226) 899-2461</a></div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="pbminfotech-ihbox-style-6">
									<div className="pbminfotech-ihbox-inner">
										<div className="pbminfotech-ihbox-icon">
											<div className="pbminfotech-ihbox-icon-wrapper">
												<i className="themifyicon ti-email"></i>
											</div>
										</div>
										<div className="pbminfotech-ihbox-contents">
											<div className="pbminfotech-vc_general pbminfotech-vc_cta3">
												<div className="pbminfotech-vc_cta3_content-container">
													<div className="pbminfotech-vc_cta3-content">
														<div className="pbminfotech-vc_cta3-content-header pbminfotech-wrap">
															<div className="pbminfotech-vc_cta3-headers pbminfotech-wrap-cell">
																<h2 className="pbminfotech-custom-heading ">Email Address</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="pbminfotech-cta3-content-wrapper"><a href="mailto:Letsboxnmove@gmail.com"> Letsboxnmove@gmail.com</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-8">
							<div className="contact-form">
								<div className="pbmit-heading-subheading text-center">
									<h4 className="pbmit-subtitle">GET IN TOUCH</h4>
									<h2 className="pbmit-title">CONTACT US</h2>
								</div>
								<form action="" method="post" autoComplete="off">
									<div className="tp-contact-form">
										<div className="row">
											<div className="col-md-6">
												<label>Move Date</label>
												<input type="date" name="dob" placeholder="DOB*" required="" className="form-control c1" style={{ minWidth: '95%' }} />
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
												<input type="text" pattern="[A-Za-z]+( [A-Za-z]+)*" name="b_name" placeholder="Your Name*" required="" className="form-control" />
												<p className="error"></p>
											</div>
											<div className="col-md-6">
												<label>Your Email</label>
												<input type="email" name="b_email" placeholder="Your Email*" required="" className="form-control" />
												<p className="error"></p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-6">
												<label>Phone No.</label>
												<input type="tel" name="b_phone" placeholder="Your Phone*" required="" className="form-control" />
												<p className="error"></p>
											</div>
											<div className="col-md-6">
												<label>Phone Type</label>
												<select className="wide form-control" name="service" required="">
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
												<input type="text"  name="origin_address" placeholder="Origin " required="" className="form-control" />
												<p className="error"></p>
											</div>
											<div className="col-md-6">
												<label>Destination Address / Postal Code</label>
												<input type="text"  name="destination_address" placeholder="Destination" required="" className="form-control" />
												<p className="error"></p>
											</div>
										</div>
									

										

										<button type="submit" className="pbmit-btn">
												<i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
												Send Message
											</button>
									</div>
								</form>
								
							</div>
						</div>
						<div className="col-md-2"></div>
					</div>
				</div>
			</section>
			 {/* Contact End  */}

			 {/* Contact  */}
			<section className="iframe-section">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.7904521854375!2d-79.75704892381779!3d43.75644807109752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b17cefa4c1391%3A0xa4972e280cda01f0!2s16%20Sweet%20Clover%20Cres%2C%20Brampton%2C%20ON%20L6R%203A2%2C%20Canada!5e0!3m2!1sen!2sin!4v1719807929698!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
			</section>

		</div>
		 {/* Contact Us Content End  */}
<Footer />
    </>
  );
};

export default page;
