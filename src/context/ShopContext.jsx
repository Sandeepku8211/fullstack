import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState(""); // Default search value
  const [showSearch, setShowSearch] = useState(false); // Default search visibility
  const currency = "Rs"; // Currency symbol
  const deliveryFee = 20; // Delivery fee

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;