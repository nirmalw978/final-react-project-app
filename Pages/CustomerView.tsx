import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CustomerView = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({
        customer_name:"",
        email:"",
        password:""
    });

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/customers/get-by-id/${id}`);
            setCustomer(result.data);
        } catch (error) {
            console.error('Error loading customer:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{customer.customer_name}</h5>
                            <p className="card-text">Email: {customer.email}</p>
                            <p className="card-text">Password: {customer.password}</p>

                            <Link to="/customer-management" className="btn btn-secondary">
                                Back to Customers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerView;
