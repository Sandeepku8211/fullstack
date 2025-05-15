import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState(""); // Default search value
  const [showSearch, setShowSearch] = useState(false);
  const[cartItems,setCartItems]=useState({});

  const navigate = useNavigate();
  
  // Default search visibility
  const currency = "Rs"; // Currency symbol
  const deliveryFee = 20;
  
  // Delivery fee

  const getCartCount=()=>{
    let totalCount =0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {

          if(cartItems[items][item] >0){
            totalCount += cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
    return totalCount
  }

  const addToCart = async(itemId,size)=>{
    if(!size){
      toast.error('Selct Product Size')
      return;

    }
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

  const updateQuantity = (itemId, size, quantity) => {
  if (quantity <= 0) {
    // Remove the item if quantity is 0 or less
    let cartData = structuredClone(cartItems)
    if (cartData[itemId] && cartData[itemId][size]) {
      delete cartData[itemId][size]
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId] // Remove the itemId if no sizes remain
      }
    }
    setCartItems(cartData)
    return
  }

  // Update the quantity
  let cartData = structuredClone(cartItems)
  if (cartData[itemId]) {
    cartData[itemId][size] = quantity
  }
  setCartItems(cartData)
}

const getCartAmount =()=>{
  let totalAmount = 0;
  for(const items in cartItems){
    let itemInfo = products.find((product)=> product._id == items)
    for(const item in cartItems[items]){
      try {
        if( cartItems[items][item] >0){
          totalAmount += itemInfo.price * cartItems[items][item]
        }
      } catch (error) {
        
      }
    }
  }
  return totalAmount;
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
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
    
    
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