import React, { Component, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


const ItemsCount = ({data}) => {
    const {categoryId} = useParams ();

    //LOGICA CONTADOR
    const[counter, setCount] = useState(0);
    const[counter2, setCount2] = useState(0);
    const[counter3, setCount3] = useState(0);
    const[counter4, setCount4] = useState(0);
    // const valuechange = (e) => setCount(e.target.counter);
    const[stock, setStock] = useState(10);
    const[stock1, setStock1] = useState(10);
    const[stock2, setStock2] = useState(10);
    const[stock3, setStock3] = useState(10);
    const[stock4, setStock4] = useState(10);

    function ItemCount(operation) {
            if (operation == "add" && stock>0) {
                setCount (counter + 1);
                setStock (stock - 1);
            } else if (operation == "subs" && counter>0) {
                setCount (counter - 1);
                setStock (stock + 1);
            }
                
    }

    //LOGICA BOTON DETALLES
    const [showDetails, setShowDetails] = useState(false)
    const Details = () => {
        setShowDetails(current => !current);
    };

    //LOGICA REDIRECT


    return (
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {data.filter((list) => list.categoryId === categoryId).map((key) => <div className="card" key={key.id}>  
                    <button className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="chamarra"/></button>
                    <div className="card-body">
                            <p className="card-text text-small">{key.title}</p>
                            <button onClick={() => ItemCount("subs", counter)}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add", counter)}> + </button>
                            <p>Precio: ${key.price}</p>
                            <button onClick={() => Details()}> Detalles </button>
                            {showDetails && (
                                <section>
                                    <p>{key.description}</p>
                                </section>
                            )}
                            <br/>
                            <br/>
                            <p>Stock: {stock}</p>
                        </div>
                    
                    </div>)}
                </section>
    )
}

export default ItemsCount



















































































































































































































































































