import React, { Component, useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const ItemsCountAll = () => {

    const [data, setData] = useState([]);
    const getDB = async()=> {
        fetch('/data/fakedb.json', {
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
            const items = dataInJson.productos;
            setData(items);
        })    
    } 
    useEffect(()=>{
        getDB();
    },[])

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

    return (
        <>
                        <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {data.map((key) => <div className="card" key={key.id}>  
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
























