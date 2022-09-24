import React, { useState, useContext } from "react" 

const CartContext = React.createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider =  ( {defaultValue = [], children} ) => {

    const [cart, setCart] = useState(defaultValue)
    const [quantity, setQuantity] = useState(defaultValue)
    const [total, setTotal] = useState(0)

    const addItem = (itemid, amount) => {
            // const newCart = Object.assign({}, cart);
            // newCart[itemid] = quantity;
            // setCart(newCart);

            // cart.forEach(function(value,index){
            //     if(value!=itemid){
            //         const newCart = cart.slice();
            //         newCart.push(itemid);
            //         setCart(newCart);
            //         const newQuantity = quantity.slice();
            //         newQuantity.push(amount);
            //         setQuantity(newQuantity);
            //     } else {
            //         const modifyQuantity = quantity.slice();
            //         const tomodify = modifyQuantity[index];
            //         modifyQuantity[index] = tomodify + amount;
            //         setQuantity(modifyQuantity);
            //     }
            // })
            console.log(cart.length);
            if (cart.length == 0){
                itemid.quantity = amount;
                const newCart = cart.slice();
                    newCart.push(itemid);
                    setCart(newCart);
                    // const newQuantity = quantity.slice();
                    // newQuantity.push(amount);
                    // setQuantity(newQuantity);
                    setTotal(itemid.price * amount);
            }else {
                for (var i=0;i<cart.length;i++){
                    if(cart[i].title==itemid.title){
                        var actualAmount = cart[i].quantity;
                        cart[i].quantity = actualAmount + amount;
                        var repetido = true;
                    } 
                }
                if (!repetido) {
                    itemid.quantity = amount;
                    const newCart = cart.slice();
                    newCart.push(itemid);
                    setCart(newCart);
                }
                setTotal(total + (itemid.price * amount) );
            }
            
            
    }

    const clearCart = () => { setCart({}) }

    const deleteItem = (itemid) => {
        const newCart = cart.filter((x) => x !== itemid);
        setCart (newCart);
    }

    const context = {
        cart, 
        quantity,
        total,
        addItem,
        clearCart,
        deleteItem
    }

    return(
    <CartContext.Provider value={context}>
        {children}
    </CartContext.Provider>
    )
}

export {useCart, CartProvider}