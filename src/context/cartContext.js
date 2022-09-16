import React, { useState, useContext } from "react" 

const CartContext = React.createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider =  ( {defaultValue = [], children} ) => {

    const [cart, setCart] = useState(defaultValue)

    const addItem = (itemid) => {
        setCart(prevState => prevState.concat(itemid))
    }

    const clearCart = () => { setCart([]) }

    const context = {
        cart, 
        addItem,
        clearCart
    }

    return(
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
    )
}

export {useCart, CartProvider}