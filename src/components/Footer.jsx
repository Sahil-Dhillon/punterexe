import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-top-wrap">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="nav-logo">
                {/* <a href="/index-3"><img src="assets/img/logo/logo_wbg.png" alt="" /></a> */}
                <h3>Guaranteed by Punterexe.</h3>
                <h3>Play without any fear.</h3>
                <h3>Instant Withdrawls and Deposit within 5 mins.</h3>
                <h3>Fully Secure and Trustable.</h3>
              </div>
            </div>
            <div className="col-lg-8">
            <div className="stamp-logo">
                <a href="https://t.me/Punterexe"><img src="assets/img/stamps/st1.png" alt="" /></a>
                <a href="https://t.me/Punterexe"><img src="assets/img/stamps/st2.png" alt="" /></a>
                <a href="https://t.me/Punterexe"><img src="assets/img/stamps/st3.png" alt="" /></a>
              </div>
            </div>
            {/* <div className="col-md-6">
            <div className="copyright-img text-center text-md-end">
              <img src="assets/img/images/cart_img.png" alt="" />
            </div>
          </div> */}
            {/* <div className="col-lg-9"> */}
              {/* <div className="footer-menu">
                <nav>
                  <ul className="navigation">
                    <li><a href="/index">HOME</a></li>
                    <li><a href="/about-us">ABOUT US</a></li>
                    <li><a href="/tournaments">TOURNAMENT</a></li>
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/contact">PAGES</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                  </ul>
                  <div className="footer-search">
                    <form action="#">
                      <input type="text" placeholder="Find Here Now" />
                      <button><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </nav>
              </div> */}
              
              
              
            {/* </div> */}
          </div>
        </div>
        <div className="footer-quick-link-wrap">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <div className="quick-link-list">
                <ul>
                  <li><a href="https://t.me/Punterexe">FAQ</a></li>
                  <li><a href="https://t.me/Punterexe">Help Center</a></li>
                  <li><a href="https://t.me/Punterexe">Terms of Use</a></li>
                  <li><a href="https://t.me/Punterexe">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="footer-social">
                <ul>
                  <li><a href="https://t.me/Punterexe"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://t.me/Punterexe"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://t.me/Punterexe"><i className="fab fa-youtube" /></a></li>
                  <li><a href="https://t.me/Punterexe"><i className="fab fa-google" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copyright-text">
              <p>Copyright © 2022 All Rights Reserved By <span>PunterExe</span></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="copyright-img text-center text-md-end">
              <img src="assets/img/images/cart_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer