import React, { Component, useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ItemsCount = ({data}) => {
    const {categoryId} = useParams ();

    //LOGICA BOTON DETALLES
    const [showDetails, setShowDetails] = useState(false)
    const Details = () => {
        setShowDetails(current => !current);
    };

    //LOGICA REDIRECT


    return (
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {data.filter((list) => list.categoryId === categoryId).map((key) => <div className="card" key={key.id}>  
                    <Link to={`/detailed/${key.title}`} className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/></Link>
                    {/* <button className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="chamarra"/></button> */}
                    <div className="card-body">
                            <p className="card-text text-small">{key.title}</p>
                            <p>Precio: ${key.price}</p>
                            {/* <button onClick={() => Details()}> Detalles </button>
                            {showDetails && (
                                <section>
                                    <p>{key.description}</p>
                                </section>
                            )} */}
                        </div>
                    
                    </div>)}
                </section>
    )
}

export default ItemsCount



















































































































































































































































































