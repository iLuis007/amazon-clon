import React, { useRef } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const slideImages = [
    "https://images-na.ssl-images-amazon.com/images/G/33/img20/FanshopLigaMx/LigaMx_TallHero_1500x600._CB427841105_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/33/img20/Bebe/BabyMonth/BABYMONTH_DSKT_AGO_1500x600._CB406070343_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-Y2RhMjg4YjQt-w1500._CB407893285_.jpg",
  ];

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product
            id="4903800"
            title="The Lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="4903801"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903802"
            title="The Lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="4903803"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="4903804"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903805"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
