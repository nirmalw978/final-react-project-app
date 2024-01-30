import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const ProductManagement =()=>{


    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get('http://localhost:8080/products/get-all');
        setProducts(result.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/products/delete/${id}`);
        loadProducts();
    };

    return (
        <div className="container">
            <h1>Product Management</h1>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">New Price</th>
                        <th scope="col">Old Price</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.product_name}</td>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.product_name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>{product.new_price}</td>
                            <td>{product.old_price}</td>
                            <td>{product.catagory.name}</td>
                            <td>

                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/product-view/${product.product_id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/product-update/${product.product_id}`}
                                >
                                    Edit
                                </Link>


                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteProduct(product.product_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


}

export default ProductManagement;



/*
* import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const ProductManagement =()=>{


    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await axios.get('http://localhost:8080/products/get-all');
        setProducts(result.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/products/delete/${id}`);
        loadProducts();
    };

    return (
        <div className="container">
            <h1>Product Management</h1>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">New Price</th>
                        <th scope="col">Old Price</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.product_name}</td>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.product_name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                            <td>{product.new_price}</td>
                            <td>{product.old_price}</td>
                            <td>{product.catagory.name}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/product-view/${product.product_id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/product-update/${product.product_id}`}
                                >
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteProduct(product.product_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );


}

export default ProductManagement;*/