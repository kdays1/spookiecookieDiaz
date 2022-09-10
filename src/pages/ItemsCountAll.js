import React, { Component, useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const ItemsCountAll = ({ data }) => {
    const[stock, setStock] = useState(10);

    return (
        <>
        {/* { data.map(list => (
            <div key={ list.id }>
                <h4>Name: <Link to={`/explore/${list.categoryId}`}>{list.categoryId}</Link></h4>
            </div>
        ))} */}
                        <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {data.map((key) => <div className="card" key={key.id}>  
                    <Link to={`/detailed/${key.id}`} className="colored"><img className="card-img-top colors mx-auto d-block" src={key.pictureUrl} alt="producto en SpookieCookie"/></Link>
                    <div className="card-body">
                            <p className="card-text text-small">{key.title}</p>
                            <p>Precio: ${key.price}</p>
                            <p>Stock: {stock}</p>
                        </div>
                    
                    </div>)}
                </section>
    </>
    )
}

export default ItemsCountAll
























