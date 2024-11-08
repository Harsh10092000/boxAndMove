"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


import "public/css/bootstrap.min.css"
 import "public/css/fontawesome.css"
 import "public/css/flaticon.css"
 import "public/css/pbminfotech-base-icons.css"

import "public/css/aos.css"
import "public/css/swiper.min.css"
import "public/css/magnific-popup.css"

import "public/css/shortcode.css"
import "public/css/themify-icons.css"
import "public/css/demo-2.css"

import "public/css/base.css"
import "public/css/style.css"
import "public/css/responsive.css"

import "public/css/responsive.css"


import "public/revolution/rs6.css"


//import "public/js/jquery.min.js"
//import "public/js/popper.min.js"


//import "public/js/bootstrap.min.js"
//import "public/js/jquery.waypoints.min.js"


//import "public/js/jquery.appear.js"
//import "public/js/numinate.min.js"


//import "public/js/swiper.min.js"
//import "public/js/jquery.magnific-popup.min.js"


//import "public/js/circle-progress.js"
//import "public/js/aos.js"

//import "public/js/scripts.js"
//import "public/revolution/rslider.js"


//import "public/revolution/rbtools.min.js"
//import "public/revolution/rs6.min.js"

	




const Header = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <>
     
    <div className="page-wrapper">

         {/* Header Main Area  */}
        <header className="site-header header-style-4">
            <div className="pre-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pbmit-pre-header-left">
                            <ul className="social-icons">
                                <li className="pbmit-social-facebook">
                                    <a className=" tooltip-top" target="_blank" href="#">
                                        <i className="pbmit-base-icon-facebook"></i>
                                    </a>
                                </li>
                                <li className="pbmit-social-twitter">
                                    <a className=" tooltip-top" target="_blank" href="#">
                                        <i className="pbmit-base-icon-twitter"></i>
                                    </a>
                                </li>
                                <li className="pbmit-social-linkedin">
                                    <a className=" tooltip-top" target="_blank" href="#">
                                        <i className="pbmit-base-icon-linkedin"></i>
                                    </a>
                                </li>
                                <li className="pbmit-social-instagram">
                                    <a className=" tooltip-top" target="_blank" href="#">
                                        <i className="pbmit-base-icon-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="pbmit-pre-header-right">
                            <ul className="top-contact">
                          
                                <li><i className="pbmit-base-icon-phone-call"></i>+1 (437) 313-1965</li>
                                <li><i className="pbmit-base-icon-mail"></i><a href="#"><span className="__cf_email__">Mavenmovingc@gmail.com</span></a></li>
                                 {/* <li><i className="pbmit-base-icon-location-pin"></i>
                                 Brampton, ON, Canada, Ontario</li>  */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-header-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="pbmit-header-wrapper">
                                    <div className="site-branding">
                                        <span className="site-title">
                                            <Link href="/">
                                            <picture>
                                                <img className="logo-img" src="/images/logo.png" alt="" />
                                                </picture>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="site-navigations">
                                    <nav className="main-menu navbar-expand-xl navbar-light">
                                        <div className="navbar-header">
                                             {/* Toggle Button  */} 
                                            <button onClick={() => setShowNav(true)} className="navbar-toggler" type="button">
                                                <i className="pbmit-moversco-icon-bars"></i>
                                            </button>
                                        </div>

                                       
                                        <div className="collapse navbar-collapse clearfix show" id="pbmit-menu">
                                            <div className="pbmit-menu-wrap">
                                                <span className="closepanel">
                                                    <i className="pbmit-base-icon-close"></i>
                                                </span>
                                                <ul className="navigation clearfix">
                                                    <li className="active">
                                                        <Link href="/">Home</Link>
                                                    </li>
                                                    <li><Link href="/about">About us</Link></li>
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/admin/allblogs">All Blogs</Link></li>
                                                    
                                                    <li className="dropdown">
                                                        <a href="#">Services</a>
                                                        <ul>
                                                            <li><a href="residentialMoving.php">Residential Moving</a></li>
                                                            <li><a href="CondoApartmentMoving.php">Condo & apartment moving </a></li>
                                                            <li><a href="CommercialOfficeMoving.php">Commercial & Office Movers</a></li>
                                                            <li><a href="PersonalizedPackingServices.php">Personalized packing services</a></li>
                                                            <li><a href="DismantlingAssembling.php"> Dismantling & Assembling</a></li>
                                                            <li><a href="StorageService.php">Storage Service</a></li>
                                                            <li><a href="JunkRemovalService.php">Junk Removal Service</a></li>
                                                            <li><a href="LongDistanceMoving.php">Long distance moving</a></li>
                                                        </ul>
                                                    </li>

                                                    <li >
                                                        <a href="areas-we-serve.php">Areas We Serve </a>
                                                         {/* <ul>
																<li><a href="#">Brampton</a></li>
																<li><a href="#">Mississauga</a></li>
																<li><a href="#">Hamilton</a></li>
																<li><a href="#">Milton</a></li>
																<li><a href="#">Oakville</a></li>

																<li><a href="#">Burlington</a></li>
																<li><a href="#">Halton hills</a></li>
																<li><a href="#">Georgetown
																	</a></li>
																<li><a href="#">Vaughan</a></li>
																<li><a href="#">Toronto</a></li>
																<li><a href="#">Brampton</a></li>
																<li><a href="#">Markham</a></li>
																<li><a href="#">New market </a></li>
																<li><a href="#">Ajay</a></li>
																<li><a href="#">Whitby</a></li>
																<li><a href="#">Oshawa </a></li>
																<li><a href="#">Etobicoke</a></li>
																<li><a href="#">North york</a></li>
															</ul>  */}
                                                    </li>
                                                    <li><a href="contact-us.php">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>



                                    <div className="pbmit-header-info">

                                        <div className="pbmit-header-button">
                                            <a href="#request-a-quote" className="pbmit-btn">Get a free quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </header>

{showNav &&
  <div>
    
                                                <span onClick={() => setShowNav(false)} className="closepanel">
                                                    <i className="pbmit-base-icon-close"></i>
                                                </span>
                                                <ul className="navigation clearfix">
                                                    <li className="active">
                                                        <Link href="/">Home</Link>
                                                    </li>
                                                    <li><Link href="/about">About us</Link></li>
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li className="dropdown">
                                                        <a href="#">Services</a>
                                                        <ul>
                                                            <li><a href="residentialMoving.php">Residential Moving</a></li>
                                                            <li><a href="CondoApartmentMoving.php">Condo & apartment moving </a></li>
                                                            <li><a href="CommercialOfficeMoving.php">Commercial & Office Movers</a></li>
                                                            <li><a href="PersonalizedPackingServices.php">Personalized packing services</a></li>
                                                            <li><a href="DismantlingAssembling.php"> Dismantling & Assembling</a></li>
                                                            <li><a href="StorageService.php">Storage Service</a></li>
                                                            <li><a href="JunkRemovalService.php">Junk Removal Service</a></li>
                                                            <li><a href="LongDistanceMoving.php">Long distance moving</a></li>
                                                        </ul>
                                                    </li>

                                                    <li >
                                                        <a href="areas-we-serve.php">Areas We Serve </a>
                                                         {/* <ul>
																<li><a href="#">Brampton</a></li>
																<li><a href="#">Mississauga</a></li>
																<li><a href="#">Hamilton</a></li>
																<li><a href="#">Milton</a></li>
																<li><a href="#">Oakville</a></li>

																<li><a href="#">Burlington</a></li>
																<li><a href="#">Halton hills</a></li>
																<li><a href="#">Georgetown
																	</a></li>
																<li><a href="#">Vaughan</a></li>
																<li><a href="#">Toronto</a></li>
																<li><a href="#">Brampton</a></li>
																<li><a href="#">Markham</a></li>
																<li><a href="#">New market </a></li>
																<li><a href="#">Ajay</a></li>
																<li><a href="#">Whitby</a></li>
																<li><a href="#">Oshawa </a></li>
																<li><a href="#">Etobicoke</a></li>
																<li><a href="#">North york</a></li>
															</ul>  */}
                                                    </li>
                                                    <li><a href="contact-us.php">Contact Us</a></li>
                                                </ul>
                                            
  </div>
}
  </div>
  </>
  )

}

export default Header
