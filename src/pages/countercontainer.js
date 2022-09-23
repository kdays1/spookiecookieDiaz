import React, { Component, useEffect, useState } from "react"
import './styles.css'
import  { useParams } from 'react-router-dom'

const Counter = ({product, ItemCount, counter, stock}) => {
    // const {itemId} = useParams ();

    return (
        <section>
            <div className="container">
            <div className="card" id={product.title}>
                            <button onClick={() => ItemCount("subs")}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add")}> + </button>
                            <p>Precio: ${product.price}</p>
                            <p>Stock: {stock}</p>
            </div>
            </div>
    </section>
)}

export default Counter