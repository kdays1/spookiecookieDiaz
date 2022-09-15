import React, { Component, useEffect, useState } from "react"
import './styles.css'
import  { useParams } from 'react-router-dom'

const Counter = ({details, ItemCount, counter, stock}) => {
    const {itemId} = useParams ();

    return (
        <section>
            <div className="container">
            {details.filter((list) => list.title === itemId).map((key) => <div className="card" key={key.title}>
                            <button onClick={() => ItemCount("subs")}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add")}> + </button>
                            <p>Precio: ${key.price}</p>
                            <p>Stock: {stock}</p>
            </div>)}
            </div>
    </section>
)}

export default Counter