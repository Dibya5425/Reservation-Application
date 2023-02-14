import React from 'react'
import "./searchItem.css";

const SearchItemThree = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/149192566.jpg?k=7fdf3186c0db6ae0a1f17abf6c6709643b37fc8715b4c7fc177d570f1accf7ac&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Mayfair Convention ★★★★</h1>
        <span className="siDistance">0.6 KM from center</span>
        <span className="siTaxiOp">Free airport and Railway Station taxi</span>
        <span className="siSubtitle">
        Breakfast included
        </span>
        
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fabulous</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹4,925/-</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
      
    </div>
  )
}

export default SearchItemThree