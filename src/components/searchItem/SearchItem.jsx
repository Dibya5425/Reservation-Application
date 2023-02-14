import "./searchItem.css";
import React from "react";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/295043898.webp?k=a8899f1befbdcabba4b65d12277301bc398746194a99b81ec890439c4cd4e1bd&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Pal Heights Mantra ★★★★</h1>
        <span className="siDistance">7.9 KM from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
        Breakfast included
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹4,989/-</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
      
    </div>
  );
};

export default SearchItem;