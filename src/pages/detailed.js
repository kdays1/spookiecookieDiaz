import React, { Component, useContext, useEffect, useState } from "react"
import './styles.css'
import { useParams, Link } from 'react-router-dom'
import CounterContainer from './countercontainer'
import { useCart } from "../context/cartContext"
import { CartProvider} from "../context/cartContext"

function Detailed () {

    const {itemId} = useParams ()
    const {cart} = useCart()
    const { addItem } = useCart()

    const [details, setDetails] = useState([]);
    const getDetails = async() => {
        fetch('/data/fakeDetails.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(dataInJson) {
            const items2 = dataInJson.productos;
            console.log(items2);
            setDetails(items2);
        })
    }

    useEffect(()=>{
        getDetails();
    },[])


        //LOGICA AGREGAR CARRITO
        function AddtoCart (itemid) 
        {
            addItem(itemid);
        }

    //LOGICA CONTADOR
    const initialStock = details.filter((list) => list.title === itemId);
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
            <CartProvider>
            <div className="container">
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {details.filter((list) => list.title === itemId).map((key) => <div className="card" key={key.title}>
                    <div className="card-body">
                            <h2 className="card-text text-small">{key.title}</h2>
                            <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl1} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl2} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl3} alt="Producto de SpookieCookie"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl4} alt="Producto de SpookieCookie"/></button>
                            </div>
                            {1 >= counter <= 10 && goBack == 0 ? (
                                <div className="d-flex flex-wrap flex-column justify-content-around align-items-center">
                                <CounterContainer details={details} ItemCount={ItemCount} counter={counter} stock={stock}/>
                                </div>) :
                                (<div className="d-flex flex-wrap flex-column justify-content-around align-items-center">
                                    {/* <Link to={'/cart'}><button onClick={() => AddtoCart(key.title)}>Agregar al carrito</button></Link>    */}
                                    <button onClick={() => AddtoCart(key.title)}>Agregar al carrito</button>
                                    <button onClick={() => setgoBack(0)}>Continuar Comprando</button>
                                </div>)
                            }

                            <strong>CARRITO: </strong> {cart}
                        </div>
                    </div>)}
                </section>
            </div>
            </CartProvider>
    </section>



    )
}

export default Detailed