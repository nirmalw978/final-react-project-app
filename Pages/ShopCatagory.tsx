import React, {useContext} from "react";
import './CSS/ShopCatagory.css'
import {ShopContext} from "../Context/ShopContext";
import Item from '../components/Item/Item'
import dropdown_icon from '../components/assets/dropdown.png'

const ShopCatagory = (props) => {
    const { all_product } = useContext(ShopContext);

    return(
        <div className="shop-category">
            <img src={props.banner} alt=""/>
            <div className="shopcatagory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 40 products
                </p>

                <div className="shopcatagory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {(all_product ?? []).map((item:any,i)=>{
                    console.log(item);
                    console.log(props.category);

                    if (props.category===item.catagory.name){
                        return <Item key={i} id={item.product_id} name={item.product_name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default ShopCatagory;



/*

import React, {useContext} from "react";
import './CSS/ShopCatagory.css'
import {ShopContext} from "../Context/ShopContext";
import Item from '../components/Item/Item'
import dropdown_icon from '../components/assets/dropdown.png'

const ShopCatagory = (props) => {
    const { all_product } = useContext(ShopContext);

    return(
        <div className="shop-category">
            <img src={props.banner} alt=""/>
            <div className="shopcatagory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 40 products
                </p>

                <div className="shopcatagory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="shopcategory-products">
                {(all_product ?? []).map((item,i)=>{
                    if (props.category===item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default ShopCatagory;*/
