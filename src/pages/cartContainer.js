import React, { useContext } from 'react';
import cartITems from './cartITems'
import { CartContext } from '../context/cartContext';

const CartContainer = () => {
    return (
        <div>
            <div>
                <h1>SpookieCookie CART</h1>
                <h3>Estos son tus productos :</h3>
            </div>
            <div>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
            {/* <CartContext.Provider>
                <cartITems/>
            </CartContext.Provider> */}
            </div>
        </div>
    )
}

export default CartContainer