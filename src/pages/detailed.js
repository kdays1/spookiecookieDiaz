import React, { Component, useContext, useEffect, useState } from "react"
import './styles.css'
import { useParams, Link } from 'react-router-dom'
import CounterContainer from './countercontainer'
import { useCart } from "../context/cartContext"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useLocation } from 'react-router-dom'
import { CartProvider} from "../context/cartContext"

function Detailed () {

    const {itemId} = useParams ()
    const {cart} = useCart()
    const {quantity} = useCart()
    const { addItem } = useCart()

    // const getDetails = async() => {
    //     fetch('/data/fakeDetails.json', {
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //     .then(function(response) {
    //         console.log(response)
    //         return response.json();
    //     })
    //     .then(function(dataInJson) {
    //         const items2 = dataInJson.productos;
    //         console.log(items2);
    //         setDetails(items2);
    //     })
    // }
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        chargingDB();
    },[])
    const chargingDB = () => {
        const db = getFirestore();
        const productsCollectionQuery = query(collection(db, "productos"), where ("title" , "==", itemId));
        getDocs(productsCollectionQuery).then((snapshot) => {
            const test = snapshot.docs.map((doc) => doc.data()); 
            setProduct(test[0]);
    })
    }

    const location = useLocation() 
    useEffect(() => {
            console.log('Location changed');
            chargingDB();
    },[location]) 


        //LOGICA AGREGAR CARRITO
        function AddtoCart (itemid, counter) 
        {
            addItem(itemid, counter);
        }

    //LOGICA CONTADOR
    const[counter, setCount] = useState(0);
    const[stock, setStock] = useState(10);
    const[goBack, setgoBack] = useState(0);

    const ItemCount = (ops) => {
        if(stock == 0){
            setgoBack(1);
        }
        if (ops == "add" && stock>0) {
            setCount (counter + 1);
            setStock (stock - 1);
        } else if (ops == "subs" && counter>0) {
            setCount (counter - 1);
            setStock (stock + 1);
        }
        if (counter >= 1){
            setgoBack(1);
        }
    }

    return (
        <section>
            <div className="container">
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    <div className="card">
                    <div className="card-body">
                            <h2 className="card-text text-small">{product.title}</h2>
                            <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={product.pictureUrl} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={product.pictureUrl} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={product.pictureUrl} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={product.pictureUrl} alt="Producto de SpookieCookie"/></button>
                            </div>
                            {1 >= counter <= 10 && goBack == 0 ? (
                                <div className="d-flex flex-wrap flex-column justify-content-around align-items-center">
                                <CounterContainer product={product} ItemCount={ItemCount} counter={counter} stock={stock}/>
                                </div>) :
                                (<div className="d-flex flex-wrap flex-column justify-content-around align-items-center">
                                    {/* <Link to={'/cart'}><button onClick={() => AddtoCart(key.title)}>Agregar al carrito</button></Link>    */}
                                    <button onClick={() => AddtoCart(product.title, counter)}>Agregar al carrito</button>
                                    <button onClick={() => setgoBack(0)}>Continuar Comprando</button>
                                </div>)
                            }

                            <strong>CARRITO: </strong> {cart} <strong> CANTIDAD:</strong> {quantity}
                        </div>
                    </div>
                </section>
            </div>
    </section>



    )
}

export default Detailed