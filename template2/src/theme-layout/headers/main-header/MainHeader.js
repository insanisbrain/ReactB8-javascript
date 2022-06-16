import React from 'react'

// Image Imports
import logo from './../../../theme-assets/img/logo/logo.png'

const MainHeader = () => {
  return (
    <>
      {/* Main Header Component */}
      <div id="sticky-header" className="main-header menu-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
              <div className="menu-wrap">
                <nav className="menu-nav show">
                  <div className="logo">
                    <a href="index.html"><img src={logo} alt="" /></a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children"><a href="#">Home</a>
                        <ul className="submenu">
                          <li className="active"><a href="index.html">Knowledge Base</a></li>
                          <li><a href="index-2.html">Home Software</a></li>
                          <li><a href="index-3.html">Home Consulting</a></li>
                        </ul>
                      </li>
                      <li><a href="about-us.html">Company</a></li>
                      <li className="menu-item-has-children"><a href="#">Services</a>
                        <ul className="submenu">
                          <li><a href="services.html">Our Services</a></li>
                          <li><a href="services-details.html">Services Details</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children"><a href="#">News</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Our Blog</a></li>
                          <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">contacts</a></li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul>
                      <li className="header-search"><a href="#"><i className="flaticon-search-magnifier-outline"></i></a></li>
                      <li className="header-btn"><a href="contact.html" className="btn">Get A Quote <span></span></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn"><i className="fas fa-times"></i></div>
                  <div className="nav-logo">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="menu-outer">
                  </div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                      <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                      <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                      <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup-wrap" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="search-close">
          <span><i className="fas fa-times"></i></span>
        </div>
        <div className="search-wrap text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="title">... Search Here ...</h2>
                <div className="search-form">
                  <form action="#">
                    <input type="text" name="search" placeholder="Type keywords here" />
                    <button className="search-btn"><i className="fas fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header Component */}
    </>
  )
}

export default MainHeader