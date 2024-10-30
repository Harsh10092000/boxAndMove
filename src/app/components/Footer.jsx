import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <>
      <footer className="footer site-footer pbmit-bg-color-secondary">
			
			<div className="pbmit-footer-widget-area">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-3">
							<div className="widget">
								<div className="textwidget">
									<p>
										{/* <Image className="pbmit-footerlogo" height={100} width={100}   src="/images/logo.png" alt="" /> */}
										<picture>
  
  <img src="/images/logo.png" alt="" className="pbmit-footerlogo" loading="lazy" />
</picture>
									</p>
									<p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.Duis aute irure dolor in reprehenderit in voluptate velit.</p>
								</div>
								<div className="pbmit-social-links-wrapper">
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
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="widget">
								<h2 className="widget-title">QUICK LINKS</h2>
								<div className="textwidget">
									<ul>
									<li><a href="#">Home</a></li>
										<li><a href="#">About Us</a></li>
										<li><a href="#">Areas We Serve</a></li>
										<li><a href="#">Get In Touch</a></li>										
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="widget">
								<h2 className="widget-title">SERVICES</h2>
								<div className="textwidget">
									<ul>
										<li><a href="#">Residential Moving</a></li>
										<li><a href="#">Condo & apartment moving </a></li>
										<li><a href="#">Commercial & Office Movers</a></li>
										<li><a href="#"> Dismantling & Assembling</a></li>
										<li><a href="#">Storage Service</a></li>
										<li><a href="#">Junk Removal Service</a></li>
										<li><a href="#">Long distance moving</a></li>										
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="widget">
								<h2 className="widget-title">Contact info</h2>
								<div className="textwidget">
								<ul>
										<li><a href="#"><strong>Phone:</strong> <br />+1 (226) 899-2461,<br /> +1 (437) 313-1965</a></li>
										<li><a href="#"><strong>Address:</strong> <br /> Brampton, ON, Canada, Ontario</a></li>
										<li><a href="#"><strong>E-mail: </strong> <br />info@boxnmove.ca</a></li>
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pbmit-footer-bottom">
				<div className="container">
					<div className="pbmit-footer-text-inner text-center">
						<div className="row">
							<div className="col-md-12">
								<div className="pbmit-footer-copyright-text-area"> Copyright © 2024 BoxNmove. All rights reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
        <div className="pbmit-search-overlay">
		<div className="pbmit-icon-close"></div>
		<div className="pbmit-search-outer">
			<div className="pbmit-search-logo">
				{/* <Image src="/images/homepage-4/logo-white.png" width={100} height={100} alt="" /> */}
				<picture>
  
  <img src="/images/homepage-4/logo-white.png" alt=""  loading="lazy" />
</picture>
			</div>
			<form className="pbmit-site-searchform">
				<input type="search" className="form-control field searchform-s" name="s" placeholder="Type Word Then Press Enter" />
				<button type="submit">
					<i className="pbmit-base-icon-search"></i>
				</button>
			</form>
		</div>
	</div>
    </>
  )
}

export default Footer
