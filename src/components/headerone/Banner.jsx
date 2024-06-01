import React from 'react'
import 'animate.css';
function Banner() {
  return (
    <div id="parallax" className="banner-area banner-bg">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-lg-9">
              <div className="banner-content text-center">
                <h2 className="title layer animate__animated animate__fadeInUp animate__delay-.8s" data-depth="-0.2">Experience the Thrill of Winning</h2>
                {/* <h5 className="small-title animate__animated animate__fadeInUp animate__delay-.4s">Your Premier Destination for Exciting Betting Action</h5> */}
                <div className="banner-btn animate__animated animate__fadeInUp animate__delay-.12s">
                  <a href="https://t.me/Punterexe" className="btn">Get Demo Id<i className="fas fa-play-circle" /></a>
                  <a href="https://t.me/Punterexe" className="text-btn">Start Winning Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <video autoPlay muted loop playsInline id="hero-video" src='assets/videos/car_moving.mp4'/> */}
      <video autoPlay muted loop playsInline id="hero-video" src='assets/videos/intro_final.mp4'/>
            {/* <source src="assets/videos/car_moving.mp4" type="video/mp4"/> */}
        
      </div>

  )
}

export default Banner