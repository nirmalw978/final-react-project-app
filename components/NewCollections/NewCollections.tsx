import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import './NewCollections.css';
import axios from "axios";

interface Product {
    product_id: number;
    product_name: string;
    image: string;
    new_price: number;
    old_price: number;
    catagory:{
        id:number;
        name:string
    }
}

const NewCollections = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const result = await axios.get<Product[]>('http://localhost:8080/products/get-all');
            setProducts(result.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className="new-collections">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections" >
                {products.map((item, i) => (
                    <Item
                        key={i}
                        id={item.product_id}
                        name={item.product_name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}

                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;



/*
import React from "react";
import new_collections from '../assets/new_collections'
import Item from "../Item/Item";
import './NewCollections.css'
const NewCollections =()=>{
    return(
        <div className="new-collections">
            <h1>NEW COLLECTION</h1>
            <hr/>
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />}
                )}
            </div>
        </div>
    );
}

export default NewCollections;*/
