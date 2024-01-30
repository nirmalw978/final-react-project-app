import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductView = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        loadProduct();
    }, [id]);

    const loadProduct = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/products/get-by-id/${id}`);
            setProduct(result.data);
        } catch (error) {
            console.error('Error loading product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Product Details</h1>
            <div className="mb-3">
                <label className="fw-bold">Product Name:</label>
                <p>{product.product_name}</p>
            </div>
            <div className="mb-3">
                <label className="fw-bold">Image:</label>
                <img
                    src={product.image}
                    alt={product.product_name}
                    style={{ width: '200px', height: '200px' }}
                    className="img-fluid rounded"
                />
            </div>
            <div className="mb-3">
                <label className="fw-bold">New Price:</label>
                <p>{product.new_price}</p>
            </div>
            <div className="mb-3">
                <label className="fw-bold">Old Price:</label>
                <p>{product.old_price}</p>
            </div>
            <div className="mb-3">
                <label className="fw-bold">Category Name:</label>
                <p>{product.catagory.name}</p>
            </div>
        </div>
    );
};

export default ProductView;












/*
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductView =()=>{


    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        loadProduct();
    }, [id]);

    const loadProduct = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/products/get-by-id/${id}`);
            setProduct(result.data);
        } catch (error) {
            console.error('Error loading product:', error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>Product Details</h1>
            <div>
                <label>Product Name:</label>
                <p>{product.product_name}</p>
            </div>
            <div>
                <label>Image:</label>
                <img
                    src={product.image}
                    alt={product.product_name}
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
            <div>
                <label>New Price:</label>
                <p>{product.new_price}</p>
            </div>
            <div>
                <label>Old Price:</label>
                <p>{product.old_price}</p>
            </div>
            <div>
                <label>Category Name:</label>
                <p>{product.catagory.name}</p>
            </div>
        </div>
    );


}

export default ProductView;*/
