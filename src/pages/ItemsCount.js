import React, { Component, useEffect, useState } from "react"

const ItemsCount = () => {
    //LOGICA ITEMS DISPLAY
    const [data, setData] = useState([]);
    const getDB = async()=> {
        fetch('data/fakeDB.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }) 
        .then (function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(dataInJson) {
            const items = dataInJson.chamarras;
            setData(items);
        })    
    } 
    useEffect(()=>{
        setTimeout(() => {getDB();},2000);
    },[])

    //LOGICA CONTADOR
    const[counter, setCount] = useState(0);
    // const valuechange = (e) => setCount(e.target.counter);
    const[stock, setStock] = useState(10); 
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


    return (
        <section>
            <h1>Productos</h1>
                <br/>
                <h3 className="text">Chamarras para llenar tu vida de magia y amor</h3>
                <br/>
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {/* <div className="card"> */}
                    {(data).map((key, item) => <div className="card" key={item}>  
                    <button id="colorSerenity" className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="chamarra"/></button>
                    <div className="card-body">
                            <p className="card-text text-small">{key.title}</p>
                            <button onClick={() => ItemCount("subs", counter)}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add", counter)}> + </button>
                            <p>Precio: ${key.price}</p>
                            <button onClick={() => Details()}> Detalles </button>
                            {showDetails && (
                                <p>{key.description}</p>
                            )}
                            <br/>
                            <br/>
                            <p>Stock: {stock}</p>
                        </div>
                    
                    </div>)}

                        {/* <button id="colorSerenity" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/example1.jpg')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Chamarra LilaLove</p>
                            <button onClick={() => ItemCount("subs", counter)}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add", counter)}> + </button>
                            <br/>
                            <br/>
                            <p>Stock: {stock}</p>
                        </div> */}
                    {/* </div> */}
                </section>
        </section>
    )
}

export default ItemsCount



















































































































































































































































































