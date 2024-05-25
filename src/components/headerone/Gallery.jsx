import React from 'react'
import Slider from "react-slick";

function PrevArrow(props){

  const {className,onClick} = props;
  return(
    <button type='button' className={ className } onClick={ onClick }><i className="far fa-arrow-alt-circle-left"></i></button>
  )
}
function NextArrow(props){

  const {className,onClick} = props;
  return(
    <button type='button' className={ className } onClick={ onClick }><i className="far fa-arrow-alt-circle-right"></i></button>
  )
}
function Gallery() {
    var settings = {
      centerMode: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      centerPadding: '0',
      slidesToShow: 1,
      prevArrow: <PrevArrow/>,
      nextArrow:<NextArrow/>,
     arrows:false,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
            infinite: true,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '50px',
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
            slidesToScroll: 1,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
            arrows: false,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px',
            arrows: false,
          }
        },
      ]
      };  

  return (

    <div className="gallery-area pt-120">
    <div className="container">
      <div className="row justify-content-center">
        <h2 className='m-4'>Bet on your favorite sports and teams with the best odds in the industry. Join now and get a welcome bonus!</h2>
        <div class="slider">
            <div class="slide-track">
                <div class="slide-big">
                    <img src="assets/img/gallery/slider1.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider2.jpg" class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider3.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider4.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider5.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider1.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider2.jpg" class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider3.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider4.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider5.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider1.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider2.jpg" class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider3.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider4.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide-big">
                    <img src="assets/img/gallery/slider5.jpg"  class="img-responsive" alt="" />
                </div>
                {/* <div class="slide">
                    <img src="assets/img/team/16.jpg"  class="img-responsive" alt="" />
                </div>
                <div class="slide">
                    <img src="assets/img/team/17.jpg"  class="img-responsive" alt="" />
                </div> */}
                
                
                
                


            </div>
            </div>
        <div className="col-xl-8">
          {/* <Slider className="gallery-active" {...settings}>
            <div className="gallery-item">
              <img src="assets/img/gallery/slider1.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/slider2.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/slider3.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/slider4.jpg" alt="" />
            </div>
            <div className="gallery-item">
              <img src="assets/img/gallery/slider5.jpg" alt="" />
            </div>
          </Slider> */}

        </div>
      </div>
      <div className="slider-nav" />
    </div>
  </div>
  )
}

export default Gallery