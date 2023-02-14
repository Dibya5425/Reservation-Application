import React from 'react'
import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
      <div className="fp">
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/159296493.webp?k=7e2d40c1088b24078e9d1f7542febdd1215b1009cf9d3f21c69773a2f016b52f&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Sheraton Grand ★★★★★</span>
          <span className="fpCity">Bangalore</span>
          <span className="fpPrice">Starting from ₹9,900/-</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/103705059.webp?k=4ea4ad90505a39e291254633797fd0fc4a495710c5b87427a45635b0251d23cd&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">The Taj Mahal Palace ★★★★★</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from ₹15,000/-</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/326407531.webp?k=4a56a48efd5f809e17d8e0c5373f38fbca732a4fc2332ecc79c222c71a8563d4&o=&s=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Welcomhotel by ITC Hotels ★★★★★</span>
          <span className="fpCity">Bhubaneswar</span>
          <span className="fpPrice">Starting from ₹9,000</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Fabulous</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/307213500.jpg?k=e058e19d693560e50a1d5e217a1d2c6786c64f0721e19968daf8e13c7443074f&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Trident ★★★★★</span>
          <span className="fpCity">Bhubaneswar</span>
          <span className="fpPrice">Starting from ₹9,999</span>
          <div className="fpRating">
            <button>9.2</button>
            <span>Exceptional</span>
          </div>
        </div>
      </div>
    );
};
  
export default FeaturedProperties;
  