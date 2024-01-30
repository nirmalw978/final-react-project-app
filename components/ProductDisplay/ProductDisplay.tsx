import React, {useContext, useEffect, } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star.png'
import star_dull_icon from '../assets/dull_star.png'
import {ShopContext} from "../../Context/ShopContext";
import axios from "axios";

const ProductDisplay =(props)=>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

//const [orders,setOrders]=useState([]);

useEffect(()=>{
    loadOrders();
},[]);

const loadOrders=async ()=>{
    const result =await axios.get("http://localhost:8080/products/get-all");
    console.log(result.data);
}




    return(
<div className='productdisplay'>
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt=""/>
        </div>
    </div>
    <div className="productdisplay-right">
        <h1>{product.product_name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_icon} alt=""/>
            <img src={star_dull_icon} alt=""/>
            <p>(55)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam quos saepe unde
            voluptates! Possimus, quam, quas. Fugiat, perspiciatis, vel?
        </div>


            <button onClick={()=>{addToCart(product.product_id)}}>ADD TO CART</button>

            <p className='productdisplay-right-category'><span>category :</span>Foods, Drinks ,Electronics</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>


    );
}

export default ProductDisplay;


/*

import React, {useContext, useEffect, } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star.png'
import star_dull_icon from '../assets/dull_star.png'
import {ShopContext} from "../../Context/ShopContext";
import axios from "axios";

const ProductDisplay =(props)=>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

//const [orders,setOrders]=useState([]);

    useEffect(()=>{
        loadOrders();
    },[]);

    const loadOrders=async ()=>{
        const result =await axios.get("http://localhost:8080/products/get-all");
        console.log(result.data);
    }




    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=""/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>(55)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam quos saepe unde
                    voluptates! Possimus, quam, quas. Fugiat, perspiciatis, vel?
                </div>


                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                <p className='productdisplay-right-category'><span>category :</span>Women, T-shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>


    );
}

export default ProductDisplay;*/
