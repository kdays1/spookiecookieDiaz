import React, { Component, useEffect, useState } from "react"
import './styles.css'

const Detailed = () => {

    const [details, setDetails] = useState([]);
    const getDetails = async() => {
        fetch('data/fakeDetails.json', {
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
            const items = dataInJson.chamarras;
            setDetails(items);
        })
    }

    useEffect(()=>{
        setTimeout(() => {getDetails();},2000);
    },[])

    return (
        <section>
            <div className="container">
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    {(details).map((key, item) => <div className="card" key={item}> 
                    <div className="card-body">
                            <h2 className="card-text text-small">{key.title}</h2>
                            <div className="d-flex flex-wrap justify-content-around align-items-center">
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl1} alt="chamarra"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl2} alt="chamarra"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl3} alt="chamarra"/></button>
                            <button className="colored"><img className="picDeatils card-img-top colors mx-auto d-block" src={key.pictureUrl4} alt="chamarra"/></button>
                            </div>
                            {/* <button onClick={() => ItemCount("subs", counter)}> - </button>
                            <input type="text" value={counter}/>
                            <button onClick={() => ItemCount("add", counter)}> + </button> */}
                            <br/>
                            <p>Precio: ${key.price}</p>
                                    <p>{key.description}</p>
                            <br/>
                            <br/>
                            {/* <p>Stock: {stock}</p> */}
                        </div>
                    
                    </div>)[0]}
                </section>
        </div>
    </section>

        

    )
}

export default Detailed