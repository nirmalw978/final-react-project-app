import React, {useState} from "react";
import './CSS/createCustomer.css'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const CreateCustomer = () => {


    const navigate = useNavigate();

    const [user, setUser] = useState({
        customer_name: "",
        email: "",
        password: "",
    });

    const { customer_name, email, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const response =await  axios.post("http://localhost:8080/customers/create", user);

        console.log(response.status);
        navigate("/");

    };


    return(


        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Register User</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">Register User</h2>

                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="customer_name" className="form-label">
                                        Customer Name
                                    </label>
                                    <input
                                        id="customer_name"
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name="customer_name"
                                        value={customer_name}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your username"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your e-mail address"
                                        name="password"
                                        value={password}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-outline-primary">
                                    Submit
                                </button>
                                <Link className="btn btn-outline-danger mx-2" to="/">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default CreateCustomer;
