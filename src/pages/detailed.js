import React, { Component, useEffect, useState } from "react"
import './styles.css'
import { useParams, Link } from 'react-router-dom'
import CounterContainer from './countercontainer'

const Detailed = ({details}) => {
    const {itemId} = useParams ();

    //LOGICA CONTADOR
    const initialStock = details.filter((list) => list.title === itemId);
    const[counter, setCount] = useState(0);
    // const[stock, setStock] = useState(initialStock.availableSizes);
    const[stock, setStock] = useState(10);
    const[goBack, setgoBack] = useState(0);

    // function ItemCount(operation, firststock) {
    //         // if(stock == 0 && counter == 1){
    //         //     setStock(firststock-1);
    //         // }
    //         if (operation == "add" && stock>0) {
    //             setCount (counter + 1);
    //             setStock (stock - 1);
    //         } else if (operation == "subs" && counter>1) {
    //             setCount (counter - 1);
    //             setStock (stock + 1);
    //         }

    // }
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
                                    <Link to={'/cart'}><button>Finalizar Compra</button></Link>   
                                    <button onClick={() => setgoBack(0)}>Continuar Comprando</button>
                                </div>)
                            }
                        </div>
                    </div>)}
                </section>
        </div>
    </section>



    )
}

export default Detailed