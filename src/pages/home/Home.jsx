import React from "react";
import "./home.css";

import NavBar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured.jsx";
import PropertyList from "../../components/propertyList/PropertyList.jsx";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
    return(
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <div className="homeContainer">
                <h1 className="homeFeatured">Explore India</h1>
                <h2 className="homeFeaturedDec">These popular destinations have a lot to offer</h2>
                <Featured></Featured>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList></PropertyList>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties></FeaturedProperties>
                <MailList></MailList>
                <Footer></Footer>
            </div>
        </div>
    )
}
export default Home;