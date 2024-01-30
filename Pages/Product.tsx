import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams<{ productId: string }>();

    // Use the non-null assertion operator (!) to assert that all_product is not null or undefined
    const product = all_product!.find((e) => e.product_id === Number(productId));

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;


/*

import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams<{ productId: string }>();

    // Use the non-null assertion operator (!) to assert that all_product is not null or undefined
    const product = all_product!.find((e) => e.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
};

export default Product;
*/
