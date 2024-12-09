import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemsId) => {
        if (!cartItems[itemsId]) {
            setCartItems((prev) => ({ ...prev, [itemsId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }))
        }
    }

    const removeFromCart = (itemsId) => {
        setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }))
    }

    const totalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product.id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }

    // useEffect(() => {
    //     console.log(cartItems)
    // }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        totalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider