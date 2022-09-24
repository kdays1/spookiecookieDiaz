import React, { useContext } from 'react'
import { useCart } from "../context/cartContext"
import './styles.css'

function cartITems () {

    // const {cart} = useCart()
    // const {quantity} = useCart()
    // const { deleteItem } = useCart()
    // const {clearCart} = useCart()

    return(
        // <section className="d-flex flex-wrap justify-content-around align-items-center">
        //     {cart.map((key) => <div className="card" key={key}>  
        //         <img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/>
        //         <div className="card-body">
        //             <p className="card-text text-small">{key}</p>
        //             {/* <p>Precio: ${key.price}</p> */}
        //         </div>
                    
        //     </div>)}
        //     {quantity.map((key2) => <div className="card" key={key2}>  
        //         {key2}
        //         </div>)}
        // </section>
        <></>
    )
}

export default cartITems