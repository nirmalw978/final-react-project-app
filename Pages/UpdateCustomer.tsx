import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const UpdateCustomer =()=>{


   const navigate = useNavigate();

   const { id } = useParams();

   const [customer, setCustomer] = useState({
      customer_name: "",
      email: "",
      password: "",
   });

   const { customer_name, email, password } = customer;

   const onInputChange = (e) => {
      setCustomer({ ...customer, [e.target.name]: e.target.value });
   };

   useEffect(() => {
      loadUser();
   }, []);

   const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/customers/update/${id}`, customer);
      navigate("/customer-management");
   };

   const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/customers/get-by-id/${id}`);
      setCustomer(result.data);
   };

   return (
       <div className="container">
          <div className="row">
             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit User</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                   <div className="mb-3">
                      <label htmlFor="Customer_name" className="form-label">
                         Name
                      </label>
                      <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter your name"
                          name="customer_name"
                          value={customer_name}
                          onChange={(e) => onInputChange(e)}
                      />
                   </div>
                   <div className="mb-3">
                      <label htmlFor="Email" className="form-label">
                         Username
                      </label>
                      <input
                          type={"text"}
                          className="form-control"
                          placeholder="Enter your username"
                          name="email"
                          value={email}
                          onChange={(e) => onInputChange(e)}
                      />
                   </div>
                   <div className="mb-3">
                      <label htmlFor="Password" className="form-label">
                         E-mail
                      </label>
                      <input
                          type={"text"}
                          className="password"
                          placeholder="Enter your e-mail address"
                          name="password"
                          value={password}
                          onChange={(e) => onInputChange(e)}
                      />
                   </div>
                   <button type="submit" className="btn btn-outline-primary">
                      Submit
                   </button>
                   <Link className="btn btn-outline-danger mx-2" to="/customer-management">
                      Cancel
                   </Link>
                </form>
             </div>
          </div>
       </div>
   );


}

export default UpdateCustomer;