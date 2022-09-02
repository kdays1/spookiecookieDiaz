import React, { useState } from "react"

const ItemsCount = () => {
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

    return (
        <section>
            <h1>Productos</h1>
                <br/>
                <h3 className="text">Chamarras para llenar tu vida de magia y amor</h3>
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    <div className="card">
                        <button id="colorSerenity" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/example1.jpg')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Chamarra LilaLove</p>
                            <button onClick={() => ItemCount("subs", counter)}> - </button>
                            {/* <span>   {counter}   </span> */}
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add", counter)}> + </button>
                            <br/>
                            <br/>
                            <p>Stock: {stock}</p>
                            <p>Counter: {counter}</p>
                        </div>
                    </div>
                </section>
        </section>
    )
}

export default ItemsCount



















































































































































































































































































