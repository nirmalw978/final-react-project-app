//import {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import {BrowserRouter , Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCatagory from "./Pages/ShopCatagory";
import Cart from "./Pages/Cart";

import Product from "./Pages/Product";
import Footer from "./components/Footer/Footer";
import React from "react";
import banner1 from "./components/assets/banner1.png"
import banner2 from "./components/assets/banner2.jpg"
import banner3 from "./components/assets/banner3.jpg"
import AdminPanel from "./Pages/AdminPanel";
import LoginSignup from "./Pages/LoginSignup";
//import CreateCustomer from "./Pages/CreateCustomer";
import CustomerManagement from "./Pages/CustomerManagement";
import UpdateCustomer from "./Pages/UpdateCustomer";
import ProductManagement from "./Pages/ProductManagement";
import ProductView from "./Pages/ProductView";
import CreateCustomer from "./Pages/CreateCustomer";
import ProductUpdate from "./Pages/ProductUpdate";
import AdminLogin from "./Pages/AdminLogin";
import CustomerView from "./Pages/CustomerView";

function App() {
    return(
<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/foods' element={<ShopCatagory banner={banner1} category="foods"/>}/>
        <Route path='/drinks' element={<ShopCatagory banner={banner2} category="drinks"/>}/>
        <Route path='/electronics' element={<ShopCatagory banner={banner3} category="elctronics"/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/admin-panel' element={<AdminPanel />}/>
        <Route path='/customer-management' element={<CustomerManagement />} />
        <Route path='/update-customer/:id' element={<UpdateCustomer />} />
        <Route path='/product-management' element={<ProductManagement />} />
        <Route path='/product-view/:id' element={<ProductView />} />
        <Route path='/customer-view/:id' element={<CustomerView />} />
        <Route path='/product-update/:id' element={<ProductUpdate />} />
        <Route path='/create-customer' element={<CreateCustomer/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />



    </Routes>
    <Footer/>
</BrowserRouter>

    );

}
export default App;
