import React, {useContext, useState} from 'react';
import ('./Navbar.css');
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {

    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>E-SMART</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("foods")}}><Link to='/foods'>Foods</Link>{menu==="foods"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("drinks")}}><Link to='/drinks'>Drinks</Link>{menu==="drinks"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electronics")}}><Link to='/electronics'>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>

                <Link to='/cart'><img src={cart_icon} alt=""/></Link>

                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )



}
export default Navbar;





/*

import React, {useContext, useState} from 'react';
import ('./Navbar.css');
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {

    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>E-SMART</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("foods")}}><Link to='/foods'>Foods</Link>{menu==="foods"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("drinks")}}><Link to='/drinks'>Drinks</Link>{menu==="drinks"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electronics")}}><Link to='/electronics'>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>

                <Link to='/cart'><img src={cart_icon} alt=""/></Link>

                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )



}
export default Navbar;*/
