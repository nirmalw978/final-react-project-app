import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";



const ProductUpdate = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({
        product_name: "",
        image: "",
        new_price: 0,
        old_price: 0,
        catagory: { name: "" },
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/products/update/${id}`, product);
            navigate("/product-management");
            // Redirect to product details or product management page after successful update
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="fw-bold">Product Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="product_name"
                        value={product.product_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Image:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="fw-bold">New Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="new_price"
                        value={product.new_price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Old Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="old_price"
                        value={product.old_price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="fw-bold">Category Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="catagory_name"
                        value={product.catagory.name}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default ProductUpdate;
