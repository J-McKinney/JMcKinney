import React, { Component } from "react";
import Swiper from "swiper";
import hongkong from "../../images/hong-kong.jpg";
import marsh from "../../images/marsh.jpg";
import mountainrange from "../../images/mountain-range.jpg";
import nightmoon from "../../images/night-moon.jpg";
import paris from "../../images/paris.jpg";
import rockybeach from "../../images/rocky-beach.jpg";
////////////CSS////////////
//swiper css must come first
import "swiper/css/swiper.min.css";
// your custom css must come second to overwrite certain stylings in swiper.css
import CarouselStyle from "./Carousel.module.css";

class Carousel extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      speed: 800, // controls the speed between each slide when arrow click or grabCursor
      grabCursor: true, // little hand cursor over slides
      loop: true, // allows the slides to loop from the last slide back to the first in that direction
      centeredSlides: true, // helps to center the slides
      slidesPerView: 2, // allows the slide you're looking at to be the centered slide with the slide before and the slide after to be hanging just off the page from the left and right of it
      parallax: true, // Helps focus the users attention to the slide in front/center
      autoplay: {
        // allows for autoplay for the slides
        delay: 2500, // a delay for each slide before it flips to the next one
        disableOnInteraction: false, // if you want to stop autoplay with a click to the slides
      },
      effect: "coverflow", // coverflow is the type of effect on the pictures
      coverflowEffect: {
        // the effect that you want to use
        rotate: 43, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 200, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multipler
        slideShadows: true, // Enables slides shadows
      },
      pagination: {
        // Object with navigation parameters
        el: ".swiper-pagination", // little dots under the slides for navigation
        clickable: true, // allows you to click on the little dots
      },
      navigation: {
        // Object with navigation parameters
        nextEl: ".swiper-button-next", // arrows on the side of the slides
        prevEl: ".swiper-button-prev", // arrows on the side of the slides
      },
    });
  }
  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className="d-block w-100" src={hongkong} alt="First slide" />
            </div>
            <div className="swiper-slide">
              <img className="d-block w-100" src={marsh} alt="Second slide" />
            </div>
            <div className="swiper-slide">
              <img
                className="d-block w-100"
                src={mountainrange}
                alt="Third slide"
              />
            </div>
            <div className="swiper-slide">
              <img
                className="d-block w-100"
                src={nightmoon}
                alt="Fourth slide"
              />
            </div>
            <div className="swiper-slide">
              <img className="d-block w-100" src={paris} alt="Fifth slide" />
            </div>
            <div className="swiper-slide">
              <img
                className="d-block w-100"
                src={rockybeach}
                alt="Sixth slide"
              />
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </>
    );
  }
}

export default Carousel;
