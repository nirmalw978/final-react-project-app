import React from "react";
import {Link} from "react-router-dom";

const AdminPanel =()=>{


    const buttonStyle = {
        textDecoration: "none",
        color: "inherit"
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card my-3 p-3">
                        <div className="card-body">
                            <h5 className="card-title">Customer Management</h5>
                            <Link
                                to="/customer-management"
                                className="btn btn-primary btn-lg"
                                style={buttonStyle}
                            >
                                Go to Customer Management
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card my-3 p-3">
                        <div className="card-body">
                            <h5 className="card-title">Product Management</h5>
                            <Link
                                to="/product-management"
                                className="btn btn-success btn-lg"
                                style={buttonStyle}
                            >
                                Go to Product Management
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card my-3 p-3">
                        <div className="card-body">
                            <h5 className="card-title">Order Management</h5>
                            <Link
                                to="/order-management"
                                className="btn btn-warning btn-lg"
                                style={buttonStyle}
                            >
                                Go to Order Management
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default AdminPanel;