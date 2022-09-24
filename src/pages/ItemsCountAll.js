import React, { Component, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemsCountAll = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        chargingDB();
    },[]);
    
    const chargingDB = () => {
        const db = getFirestore();
        const productsCollection = collection(db, "productos");
        getDocs(productsCollection).then((snapshot) => {
            const test = snapshot.docs.map((doc) => ({...doc.data()})); 
            setProducts(test);
            console.log(test);
    })
    }

    return (
        <>
                        <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {products.map((key) => <div className="card" key={key.id}>  
                    <Link to={`/detailed/${key.title}`} className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/></Link>
                    <div className="card-body">
                            <p className="card-text text-small">{key.title}</p>
                            <p>Precio: ${key.price}</p>
                        </div>
                    
                    </div>)}
                </section>
    </>
    )
}

export default ItemsCountAll
























