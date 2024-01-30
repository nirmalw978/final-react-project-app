import React from "react";
import './Footer.css'
import footer_logo from '../assets/logo.png'
import instagram_icon from '../assets/instagram.png'
import pintester_icon from '../assets/pinterest.png'
import facebook_icon from '../assets/facebook.png'
const Footer =()=>{
    return(
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>E-SMART</p>
            </div>
            <ul className="footer-links">
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>About</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icon">
               <div className="footer-icons-container">
                   <img src={instagram_icon} alt=""/>
               </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 - All Right Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;