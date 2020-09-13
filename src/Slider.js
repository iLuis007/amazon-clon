import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./Slider.css";
import "react-slideshow-image/dist/styles.css";

function Slider() {
  const slideRef = useRef(null);

  const properties = {
    duration: 5000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    //prevArrow:
    // indicators: (i) => <div className="indicator">{i + 1}</div>,
  };
  const slideImages = [
    "https://images-na.ssl-images-amazon.com/images/G/33/img20/FanshopLigaMx/LigaMx_TallHero_1500x600._CB427841105_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/33/img20/Bebe/BabyMonth/BABYMONTH_DSKT_AGO_1500x600._CB406070343_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-Y2RhMjg4YjQt-w1500._CB407893285_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v1_es_US_2x._CB428993288_.jpg",
  ];

  return (
    <div className="slider">
      <div>
        <Slide ref={slideRef} {...properties}>
          {slideImages.map((each, index) => (
            // <div key={index} className="home__image">
            <img className="home__image" src={each} alt="sample" />
            // </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
