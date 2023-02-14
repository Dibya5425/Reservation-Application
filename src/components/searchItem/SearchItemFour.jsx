import React from 'react'

const SearchItemFour = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/329055147.jpg?k=b33543563ea48f97a69d93a30a16ce0fdb628757bd147d2b9d341395c823850f&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Vivanta Bhubaneswar ★★★★★</h1>
        <span className="siDistance">9.2 KM from center</span>
        <span className="siTaxiOp">+₹900 taxi and charges</span>
        <span className="siSubtitle">
        Breakfast and Dinner included
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
          <span className="siPrice">₹9,089/-</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
      
    </div>
  )
}

export default SearchItemFour