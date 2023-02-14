import React from 'react'
import './hotel.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/159807465.jpg?k=743423e8baf7139f726fdf6323e326fcec23cc7c3ec4a67ce6e8d63972f48357&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x950/295043898.jpg?k=50d6de03e3c0edb61c1a466276fe06aed02bd357025116cedf021ed46fccec7c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/227753794.jpg?k=b8c1b86b87c048378ecc8a7cdbeee5b13da65f76d086d50e6c20ad3d5439a675&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/227753648.jpg?k=52ca964da5e813314e137530e5fc503f5d1ef0aa1a769750e42212e375de62d3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/227753910.jpg?k=082cd16888c3f736725ad375b5cefce281cb761613c5209241dfa64aa25b6c73&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/159821549.jpg?k=acd6cd9c74fe77ad5598257a723c1969a0366b94aa0c89f6638558f066bba7c6&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Pal Heights Mantra ★★★★</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Plot No. 26, Pahal,, 752010 Bhubaneshwar, India</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 7.9 KM from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹6,999 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Located near Jagannath Temple Pahala and 10 km away from city, Pal Heights Mantra in Bhubaneshwar provides a fitness centre and rooms with free WiFi. This 4-star hotel offers a terrace. The restaurant serves Indian cuisine.
              A continental, buffet or vegetarian breakfast can be enjoyed at the property.
              The hotel offers an outdoor pool.
              Guests can rent a car to explore the area, use the business centre, or read the newspapers available on site. Staff at the 24-hour front desk can help guests with any queries that they may have.
              Biju Patnaik International Airport is 12 km away.
              Solo travellers particularly like the location — they rated it 8.0 for a one-person stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property highlights</h1>
              <h3>Perfect for a 1-night stay!</h3>
              <span>
              Top location: Highly rated by recent guests (9.1)
              </span>
              <h2>
                <b>₹4,090/-</b> (1 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;