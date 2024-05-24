import React,{ useEffect } from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";

function HeaderOne() {
  useEffect(()=>{
    //SubMenu Dropdown Toggle
      if ($('.menu-area li.menu-item-has-children ul').length) {
        $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

      }

      //Mobile Nav Hide Show
      if ($('.mobile-menu').length) {

        var mobileMenuContent = $('.menu-area .push-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
          $(this).toggleClass('open');
          $(this).prev('ul').slideToggle(500);
        });


        $('.menu-backdrop, .mobile-menu .close-btn').click (()=>{
          $('body').removeClass('mobile-menu-visible');
        })


        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
          $('body').addClass('mobile-menu-visible');
        });
      }

  },[]);


  useEffect(()=>{

    $(".menu-tigger").on("click", function () {
      $(".extra-info,.offcanvas-overly").addClass("active");
      return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".extra-info,.offcanvas-overly").removeClass("active");
    });
/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
		$("#header-top-fixed").removeClass("header-fixed-position");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
		$("#header-top-fixed").addClass("header-fixed-position");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}



  },[])

  
  return (
          
          <header>
          <div id="header-top-fixed" />
          <div id="sticky-header" className="menu-area main-header">

            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                  <div className="menu-wrap main-menu">
                    <nav className="menu-nav show">
                      <div className="nav-logo">
                        <a href="https://t.me/Punterexe"><img className='' src="assets/img/logo/logo_wbg.png" alt="" /></a>
                      </div>
                      <div className="navbar-wrap push-menu d-none d-lg-flex ">
                        <ul className="navigation">
                          <li className=" menu-item-has-children"><a href="/#">Home</a></li>
                          {/* <li className=" menu-item-has-children"><a href="https://t.me/Punterexe">Cricket</a></li>
                          <li className=" menu-item-has-children"><a href="https://t.me/Punterexe">Casino</a></li>
                          <li className=" menu-item-has-children"><a href="https://t.me/Punterexe">Tennis</a></li>
                          <li className=" menu-item-has-children"><a href="https://t.me/Punterexe">Football</a></li>
                          <li className=" menu-item-has-children"><a href="https://t.me/Punterexe">Horse Riding</a></li> */}
                          {/* <li className=" menu-item-has-children"><a href="/#"></a> */}
                            
                            {/* <li className="active"><Link  to="/">Home One</Link></li> */}
                              
                          {/* </li> */}
                          {/* <li><Link   to="/about-us">About Us</Link></li> */}
                          {/* <li><Link   to="/tournaments">Tournament</Link></li> */}
                          {/* <li className="menu-item-has-children"><a href="/#">Blog</a>
                            <ul className="sub-menu">
                              <li><a href="/blog">Our Blog</a></li>
                              <li><a href="/blog-details">Blog Details</a></li>
                            </ul>
                          </li> */}
                          {/* <li className="menu-item-has-children"><a href="/#">Pages</a>
                            <ul className="sub-menu">
                              <li><a href="/our-squad">Our Squad</a></li>
                              <li><a href="/match-single">Match Single</a></li>
                              <li><a href="/shop">Our Shop</a></li>
                              <li><a href="/shop-details">Shop Details</a></li>
                            </ul>
                          </li> */}
                          <li><Link  to="/contact">contact us</Link></li>
                        </ul>
                        {/* <div className=''># 9000600317 # 9000600318</div> */}
                      </div>
                      <div className="header-action">
                        <ul>
                        <h4 className='m-4'>CALL US NOW</h4>
                          <li><h3 >+91 9000600317<br/> +91 9000600318</h3></li>
                          <li className="header-search">
                            <a href="/#"><i className="fas fa-search" /></a>
                          </li>
                          <li className="header-sine">
                            <a href="https://t.me/Punterexe"><i className="far fa-edit" />log-in</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  {/* Mobile Menu  */}
                  <div className="mobile-menu">
                  
                    <nav className="menu-box">
                      <div className="close-btn"><i className="fas fa-times" /></div>
                      <div className="nav-logo">
                        <a href="https://t.me/Punterexe"><img src="assets/img/logo/logo_wbg.png" alt="" title="true" /></a>

                      </div>
                      <div className="menu-outer">
                       
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                      </div>
                      <div className="social-links">
                        <ul className="clearfix">
                        <h4 className='m-4'>CALL US NOW</h4>
                          <li><h3 >+91 9000600317<br/> +91 9000600318</h3></li>
                          <li><a href="https://t.me/Punterexe"><span className="fab fa-twitter" /></a></li>
                          <li><a href="https://t.me/Punterexe"><span className="fab fa-facebook-square" /></a></li>
                          <li><a href="https://t.me/Punterexe"><span className="fab fa-pinterest-p" /></a></li>
                          <li><a href="https://t.me/Punterexe"><span className="fab fa-instagram" /></a></li>
                          <li><a href="https://t.me/Punterexe"><span className="fab fa-youtube" /></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div className="menu-backdrop" />
                  {/* End Mobile Menu */}
                </div>
              </div>
            </div>
            <div className="header-icon">
              <a href="https://t.me/Punterexe" className="menu-tigger"><img src="assets/img/icon/hader_icon.png" alt="" /></a>
            </div>
            <div>
              <marquee>
              <h4>
              <a href="https://t.me/Punterexe" className='m-4 p-4'>Cricket</a>
                        <a href="https://t.me/Punterexe"className='m-4 p-4'>Football</a>
                        <a href="https://t.me/Punterexe" className='m-4 p-4'>Casino</a>
                        <a href="https://t.me/Punterexe" className='m-4 p-4'>Games</a>
                        <a href="https://t.me/Punterexe" className='m-4 p-4'>Horse Riding</a>
                        
            </h4>
                
                </marquee> 
            </div>
          </div>
          {/* header-search */}
          <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="search-close">
              <span><i className="fas fa-times" /></span>
            </div>
            <div className="search-wrap text-center">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h2 className="title">... Search Here ...</h2>
                    <div className="search-form">
                      <form action="#">
                        <input type="text" name="search" placeholder="Type keywords here" />
                        <button className="search-btn"><i className="fas fa-search" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header-search-end */}
          {/* offCanvas-menu */}
          <div className="extra-info">
            <div className="close-icon menu-close">
              <button><i className="far fa-window-close" /></button>
            </div>
            <div className="nav-logo mb-30">
              <a href="https://t.me/Punterexe"><img src="assets/img/logo/logo_wbg.png" alt="Logo" /></a>
            </div>
            <div className="side-info mb-30">
              {/* <div className="contact-list mb-30">
                <h4>Office Address</h4>
                <p>123/A, Miranda City Likaoli <br /> Prikano, Dope</p>
              </div> */}
              <div className="contact-list mb-30">
                <h4>Phone Number</h4>
                <p>+91 9000600317</p>
                <p>+91 9000600318</p>
              </div>
              {/* <div className="contact-list mb-30">
                <h4>Email Address</h4>
                <p>info@example.com</p>
                <p>example@google.com</p>
              </div> */}
            </div>
            {/* <ul className="side-instagram">
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta01.jpg" alt="" /></a></li>
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta02.jpg" alt="" /></a></li>
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta03.jpg" alt="" /></a></li>
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta04.jpg" alt="" /></a></li>
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta05.jpg" alt="" /></a></li>
              <li><a href="/our-squad"><img src="assets/img/images/sd_insta06.jpg" alt="" /></a></li>
            </ul> */}
            <div className="social-icon-right mt-30">
              <a href="https://t.me/Punterexe"><i className="fab fa-facebook-f" /></a>
              <a href="https://t.me/Punterexe"><i className="fab fa-twitter" /></a>
              <a href="https://t.me/Punterexe"><i className="fab fa-google-plus-g" /></a>
              <a href="https://t.me/Punterexe"><i className="fab fa-instagram" /></a>
            </div>
            
          </div>
          <div className="offcanvas-overly" />
           {/* offCanvas-menu-end  */}
        </header>
       
  )
}

export default HeaderOne