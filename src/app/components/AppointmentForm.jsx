"use client"
import React from 'react'
import { useState } from 'react';

const AppointmentForm = () => {
  const [currentTab, setCurrentTab] = useState(1);
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
                  <li onClick={() => setCurrentTab(1)} className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${currentTab === 1 ? "active" : ""}`}
                      data-bs-toggle="tab"
                     // href="#tab-2-1"
                      aria-selected="true"
                      role="tab"
                    >
                      <i className="pbmit-base-icon-shop"></i>
                      <span>Request a quote</span>
                    </a>
                  </li>
                  <li onClick={() => setCurrentTab(2)} className="nav-item  mob-hide" role="presentation">
                    <a
                      className={`nav-link ${currentTab === 2 ? "active" : ""}`}
                      data-bs-toggle="tab"
                      //href="#tab-2-2"
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

{console.log("currentTab : " , currentTab )}

                {currentTab === 1 ?
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
: currentTab === 2 ?

                  <div className="tab-pane show active" id="tab-2-2" role="tabpanel">
                    
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
: ""}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AppointmentForm











