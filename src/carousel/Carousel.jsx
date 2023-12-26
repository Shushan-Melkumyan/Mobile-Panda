import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
const Carousel = ({ slides, settings, styles }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="carouselContainer" style={{ ...styles }}>
      <Slider {...settings} ref={sliderRef}>
        {slides}
      </Slider>
    </div>
  );
};

export default Carousel;
