import React, { useEffect, useState } from 'react';
import cartITems from './cartITems'
import { useCart } from "../context/cartContext"
import { Link } from 'react-router-dom'
import './styles.css'

const CartContainer = () => {

    //Context
    const {cart} = useCart()
    const {quantity} = useCart()
    const { deleteItem } = useCart()
    const {clearCart} = useCart()
    const {total} = useCart()

    // //Products
    // const [products, setProducts] = useState([]);
    // const [buyProducts, setBuyProducts] = useState();

    // useEffect(()=>{
    //     chargingDB();
    //     listToBuy();
    // },[]);
    
    // const chargingDB = () => {
    //     const db = getFirestore();
    //     const productsCollection = collection(db, "productos");
    //     getDocs(productsCollection).then((snapshot) => {
    //         const test = snapshot.docs.map((doc) => ({...doc.data()})); 
    //         setProducts(test);
    //         console.log(test);
    // })
    // }

    // const listToBuy = () => {
    //     for (var i=0;i<products.length;i++) {
    //         for(var k=0;k<cart.length;k++){
    //             if (products[i].title == cart[k]) {
    //                 if (buyProducts.length == 0) {
    //                     const newList = buyProducts.slice();
    //                     newList.push()
    //                 }
    //             }
    //         }
    //     }
    //     // const newList = products.filter(b => b.title === cart.includes(b.title));
    //     console.log(newList);
    // }

    function RemoveFromCart (productDel) {
        deleteItem(productDel);
    }

    return (
        <section>
            {cart.length == 0 && (
                <div>
                    <p>Parece que aún no agregas productos al carrito</p>
                    <Link to={'/ItemsCount'}>Visita la página de productos</Link>
                </div>
            )}
            {cart.length != 0 && (
                <section>
                    <h3>Estos son tus productos : </h3>
                <table>
                <tr>
                    <p><strong>Chamarras : </strong></p>
                    {cart.filter((list) => list.categoryId === '01').map((key) => <th key={key.title}>
                        <div className="card rectangle" >  
                            <img className="card-img-top colors mx-auto d-block rectangle-up" src={key.pictureUrl} alt="producto en SpookieCookie"/>
                            <div className="card-body">
                                <p className="card-text text-small">{key.title}</p>
                            </div>
                            <p>Precio: ${key.price}</p>   
                            <p>Cantidad: {key.quantity}</p>
                        </div>
                        <button class="rectangle" onClick={() => RemoveFromCart(key)}>Eliminar</button>
                    </th>)}
                </tr>
                <tr>
                    <p><strong>Gorritos :</strong> </p>
                    {cart.filter((list) => list.categoryId === '02').map((key) => <th key={key.title}>
                        <div className="card rectangle" >  
                            <img className="card-img-top colors mx-auto d-block rectangle-up" src={key.pictureUrl} alt="producto en SpookieCookie"/>
                            <div className="card-body">
                                <p className="card-text text-small">{key.title}</p>
                            </div>
                            <p>Precio: ${key.price}</p>   
                            <p>Cantidad: {key.quantity}</p>
                            <button onClick={() => RemoveFromCart(key)}>Eliminar</button>
                        </div>
                    </th>)}
                </tr>
                {/* <tr>
                    {quantity.map((key2) => <th key={key2}>
                        <p className="card rectangle"> x {key2} </p>
                    </th>)}
                </tr> */}
                <tr>
                <p className="card rectangle"> <strong>Total a pagar : $ {total} </strong></p>
                </tr>
            </table>
                </section>
            )}
        </section>
    )
}

export default CartContainer