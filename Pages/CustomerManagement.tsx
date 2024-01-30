import React, {useEffect, useState} from "react";
//import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const CustomerManagement =()=> {

    const [customers, setCustomers] = useState([]);

    //const {id} = useParams();

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const result = await axios.get("http://localhost:8080/customers/get-all");
        setCustomers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/customers/delete/${id}`);
        loadCustomers();
    };

    return (
        <div className="container">
            <h1>Customer Management</h1>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customers, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td>{customers.customer_name}</td>
                            <td>{customers.email}</td>
                            <td>{customers.password}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/customer-view/${customers.customer_id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/update-customer/${customers.customer_id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteUser(customers.customer_id)}
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
export default CustomerManagement;