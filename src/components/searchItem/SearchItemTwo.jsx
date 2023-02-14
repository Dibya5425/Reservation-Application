import React from 'react'
import "./searchItem.css";

function SearchItemTwo() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/388709704.webp?k=471210bed8a58a5b064bd11b9c54c9969d53f72e6ae237815e0926afbdb3bbab&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sandy's TowerOpens ★★★★</h1>
        <span className="siDistance">1.3 KM from center</span>
        <span className="siTaxiOp">+₹500 taxi and charges</span>
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
          <span>Fabulous</span>
          <button>8.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹6,599/-</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
      
    </div>
  )
}

export default SearchItemTwo