import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const [search,setSearch]=useState('')
    const [showSearch,setshowSearch]=useState(true)
    const currncy = 'Rs';
    const  delivery_fee =20;
    const value ={
        products,currncy,delivery_fee,search,setshowSearch,setSearch,showSearch

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;