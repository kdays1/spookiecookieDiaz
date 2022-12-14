import React, { useEffect, useState } from 'react';
import cartITems from './cartITems'
import BuyForm from './BuyForm'
import { useCart } from "../context/cartContext"
import { Link } from 'react-router-dom'
import './styles.css'
import { addDoc, doc, collection, getFirestore, updateDoc, update, set} from "firebase/firestore"

const CartContainer = () => {
    //Context
    const {cart} = useCart()
    const { deleteItem } = useCart()
    const {clearCart} = useCart()
    const {total} = useCart()

    const [actualUser, setActualUser] = useState('')

    const [id, setOrderId] = useState();
    const [isBuying, setIsBuying] = useState(false);
    const [alreadyBuy, setalreadyBuy] = useState(false);

    const sendOrder = (user, number, mail) => {
        setActualUser(user)
        var buyItems = [];
        var client = [];
        // const order = {};
        for (var i=0; i<cart.length; i++) {
            var newproduct = {product: cart[i].title, price: cart[i].price, quantity: cart[i].quantity};
            buyItems.push(newproduct);
        }
        client.push({name: user, phone: number, email: mail})
        const order = {
            client : client,
            items : buyItems,
            total: total
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "theorders");
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        setalreadyBuy(true);
    }

    const toBuy = () => {
        setIsBuying(true);
    }
    
    const updateOrder = (object) => {
        var newBuyItems = [];
        const db = getFirestore();
        const orderDoc = doc(db, "orders", id);
        // orderDoc.collection("items")
        for (var i=0; i<cart.length; i++) {
            var newproduct = {product: cart[i].title, price: cart[i].price, quantity: cart[i].quantity};
            newBuyItems.push(newproduct);
        }
        const order = {
            items : newBuyItems,
            total: total
        };
        // orderDoc.set(order).then(() => console.log('order updated'))
        // orderDoc.update(order);
        updateDoc(orderDoc, order);
    }

    function RemoveFromCart (productDel) {
        deleteItem(productDel);
    }

    function RemoveAllCart () {
        clearCart();
    }

    return (
        <section>
            {cart.length == 0 && (
                <div>
                    <p className="text text-medium">Parece que a??n no agregas productos al carrito</p>
                    <Link to={'/ItemsCount'}>Visita la p??gina de productos</Link>
                </div>
            )}
            {cart.length != 0 && !isBuying && (
                <section>
                    <h3 className='text text-medium'>Estos son tus productos : </h3>
                <table>
                <tr>
                    {cart.filter((list) => list.categoryId === '01').length != 0 && (
                        <p className='text text-medium'><strong>Chamarras : </strong></p>
                    )}
                    {cart.filter((list) => list.categoryId === '01').map((key) => <th key={key.title}>
                        <div className="card rectangle colored" >  
                            <img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/>
                            <div className="card-body">
                                <p className="card-text text-small">{key.title}</p>
                            </div>
                            <p>Precio: ${key.price}</p>   
                            <p>Cantidad: {key.quantity}</p>
                            <button onClick={() => RemoveFromCart(key)}>Eliminar</button>
                        </div>
                    </th>)}
                </tr>
                <tr>
                {cart.filter((list) => list.categoryId === '02').length != 0 && (
                        <p className='text text-medium'><strong>Gorritos : </strong></p>
                    )}
                    {cart.filter((list) => list.categoryId === '02').map((key) => <th key={key.title}>
                        <div className="card rectangle colored" >  
                            <img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/>
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
                    <br/></tr>
                <tr>
                    <th>
                        <p className="rectangle text text-medium"> <strong>Total a pagar : $ {total} </strong></p>
                    </th>
                    <th>
                        <button className="rectangle" onClick={() => toBuy()}>Comprar</button>
                    </th>
                    <th>
                        {/* <button onClick={() => updateOrder(cart)}>Actualizar Compra</button> */}
                        <button className="rectangle" onClick={() => RemoveAllCart()}>Eliminar Todo</button>
                    </th>
                </tr>
                <tr><br/></tr>
                <tr>
                    {/* <button className="rectangle" onClick={() => RemoveAllCart()}>Eliminar Todo</button> */}
                </tr>
            </table>

            {/* <BuyForm sendOrder={sendOrder}/> */}

                </section>
            )}
            { isBuying && !alreadyBuy && <BuyForm sendOrder={sendOrder}/>}
            {alreadyBuy &&
            <section className="text text-medium">
                Gracias por comprar con nosotros, <strong>{actualUser}</strong>
                <br/>
                Tu n??mero de orden es: <strong>{id}</strong>
            </section>
            }
        </section>
    )
}

export default CartContainer