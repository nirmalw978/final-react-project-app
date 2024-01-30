

import React, {createContext, ReactNode, useEffect, useState} from "react";
//import all_product from '../components/assets/all_product';
import axios from "axios";


// Define the type for your product
type Product = {
    product_id: number;
    product_name: string;
    category: CatagoryType;
    image: string;
    new_price: number;
    old_price: number;
};

type CatagoryType ={
    id:number;
    name:string;
}

// Create the context
export const ShopContext = createContext<{ all_product?: Product[] }>({}); // make all_product optional











// Create the context provider component


const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Define the context value
    const [products, setProducts] = useState<Product[]>([]);

    const getDefaultCart = ()=>{
        const cart={};
        for(let index=0;index < products.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }
    const [cartItems,setCartItems]=useState(getDefaultCart);
    const addToCart = ( itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems)
    };

    const removeFromCart = ( itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = products.find((product:Product) => product.product_id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }




    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const result = await axios.get<Product[]>('http://localhost:8080/products/get-all');
            setProducts(result.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };



    const contextValue:any = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product: products,
        cartItems: cartItems,
        addToCart,removeFromCart};
    // Return the context provider component
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;



/*
import React, { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

// Define the type for your product
type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    new_price: number;
    old_price: number;
};

// Create the context
export const ShopContext = createContext<{ all_products?: Product[] }>({}); // make all_products optional

// Create the context provider component
const getDefaultCart = () => {
    const cart: { [key: number]: number } = {};
    return cart;
};

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Define the context value
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<{ [key: number]: number }>(getDefaultCart);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch products from the API
                const productsResult = await axios.get<Product[]>("http://localhost:8080/products/get-all");
                setAllProducts(productsResult.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = allProducts.find((product) => product.id === Number(item));
                totalAmount += itemInfo?.new_price * cartItems[item] || 0;
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_products: allProducts,
        cartItems: cartItems,
        addToCart,
        removeFromCart,
    };

    // Return the context provider component
    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
*/





/*


import React, {createContext, ReactNode, useState} from "react";
import all_product from '../components/assets/all_product';


// Define the type for your product
type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    new_price: number;
    old_price: number;
};

// Create the context
export const ShopContext = createContext<{ all_product?: Product[] }>({}); // make all_product optional

// Create the context provider component
const getDefaultCart = ()=>{
    const cart={};
    for(let index=0;index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Define the context value
    const [cartItems,setCartItems]=useState(getDefaultCart);



    const addToCart = ( itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems)
    };

    const removeFromCart = ( itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product: all_product,
    cartItems: cartItems,
        addToCart,removeFromCart};
    // Return the context provider component
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

*/












