import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import New_collections from "../components/NewCollections/NewCollections";
import Offers from "../components/Offers/Offers";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Shop = () => {
    return(
        <>
            <Hero/>
            <Popular/>
            <Offers/>
            <New_collections/>
            <NewsLetter/>

        </>

    );
}

export default Shop;