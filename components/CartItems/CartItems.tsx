
import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../assets/remove_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);



    // Ensure all_product is an array using nullish coalescing operator
    const filteredProducts = (all_product ?? []).filter(e => cartItems[e.product_id] > 0);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {filteredProducts.map((e) => (
                <div key={e.product_id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.product_name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.product_id]}</button>
                        <p>${e.new_price * cartItems[e.product_id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.product_id) }} alt="" />
                    </div>
                    <hr />
                </div>
            ))
            }
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shiping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button className='cartitems-total-item-btn'>PROCEED TO CHECKOUT</button>



                </div>
            </div>

        </div>
    );
}

export default CartItems;





/*
import React, { useContext, useState } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../assets/remove_icon.png';
import axios from "axios";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const [customerName, setCustomerName] = useState("");

    const handleInputChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleProceedToCheckout = async () => {
        const totalPrice = getTotalCartAmount();
        const productIds = Object.keys(cartItems).filter((productId) => cartItems[productId] > 0);

        // Check if customer name is entered
        if (customerName.trim() === "") {
            alert("Please enter a customer name");
            return;
        }

        const newOrder = {
            totalPrice,
            totalItems: productIds.length,
            customerId: customerName,
            productIds: productIds || [], // Ensure productIds is an array
        };

        try {
            // Assuming your API endpoint for creating orders is 'http://localhost:8080/orders/create'
            const result = await axios.post('http://localhost:8080/orders/create', newOrder);
            console.log("Order created successfully:", result.data);

            // Optionally, you can clear the cart or perform other actions after successful order creation
            // ...

        } catch (error) {
            console.error("Error creating order:", error);
        }
    };

    // Ensure all_product is an array using nullish coalescing operator
    const filteredProducts = (all_product ?? []).filter(e => cartItems[e.product_id] > 0);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {filteredProducts.map((e) => (
                <div key={e.product_id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.product_name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.product_id]}</button>
                        <p>${e.new_price * cartItems[e.product_id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.product_id) }} alt="" />
                    </div>
                    <hr />
                </div>
            ))}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <br/>

                        <div>
                            <label htmlFor="customerName">Customer Name:</label>
                            <input
                                type="text"
                                id="customerName"
                                name="customerName"
                                value={customerName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <br/>
                    </div>
                    <button className='cartitems-total-item-btn' onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
*/



/*
import React, {useContext, useState} from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../assets/remove_icon.png'

const CartItems = () => {

    const [order, setOrder] = useState({
        totalPrice: "",
        totalItems: "",
        customerId: "",
        productIds: "",
    });
    const { totalPrice,totalItems, customerId, productIds } = order;

    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);



    // Ensure all_product is an array using nullish coalescing operator
    const filteredProducts = (all_product ?? []).filter(e => cartItems[e.id] > 0);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {filteredProducts.map((e) => (
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                    </div>
                    <hr />
                </div>
            ))
            }
            <form action="submit" onSubmit={getTotalCartAmount(),}>
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr/>
                            <div className="cartitems-total-item">
                                <p>Shiping fee</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>

                        </div>
                        <button type="submit" className='cartitems-total-item-btn'>PROCEED TO CHECKOUT</button>



                    </div>
                </div>
            </form>

        </div>
    );
}

export default CartItems;*/



/*

import React, { useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../assets/remove_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);



    // Ensure all_product is an array using nullish coalescing operator
    const filteredProducts = (all_product ?? []).filter(e => cartItems[e.id] > 0);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {filteredProducts.map((e) => (
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                    </div>
                    <hr />
                </div>
            ))
            }
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shiping fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button className='cartitems-total-item-btn'>PROCEED TO CHECKOUT</button>



                </div>
            </div>

        </div>
    );
}

export default CartItems;

*/

