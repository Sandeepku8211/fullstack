import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState(""); // Default search value
  const [showSearch, setShowSearch] = useState(false);
  const[cartItems,setCartItems]=useState({});
  
  // Default search visibility
  const currency = "Rs"; // Currency symbol
  const deliveryFee = 20; // Delivery fee

  const addToCart = async(itemId,size)=>{
    let cartData = structuredClone(cartItems)
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1;
        }else{
            cartData[itemId][size] =1;
        }
    }else{
        cartData[itemId] ={};
        cartData[itemId][size] =1
    }
    setCartItems(cartData);

  }

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart
  };

  useEffect(()=>{
    console.log(cartItems)
  },[cartItems])

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;