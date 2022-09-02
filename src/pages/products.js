import React, {Component, useState} from 'react';

const Products = () => {
    return (
        <div>
            <div className="container">
                <h1>Productos</h1>
                <br/>
                <h2 className="text">Paso 1: Elige tu color favorito y talla</h2>
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    <div className="card">
                        <button id="colorSerenity" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/babyblue.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Serenity</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <button id="colorSnorkelBlue" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/blue.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Snorkel Blue</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <button id="colorGreenFlash" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/green.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Green Flash</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <button id="colorLilacGray" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/lila.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Lilac Gray</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <button id="colorPeachEcho" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/peach.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Peach Echo</p>
                        </div>
                    </div>

                    <div className="card">
                        <button id="colorRoseQuartz" className="colored"><img className="card-img-top colors mx-auto d-block" src={require('../image/pink.png')} alt="chamarra"/></button>
                        <div className="card-body">
                            <p className="card-text text-small">Color Rose Quartz</p>
                        </div>
                    </div>
                </section>

                <h2 className="text">Paso 2: Elige la talla que más te guste</h2>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text text-small">Talla:</p>
                            <div className="d-flex flex-wrap justify-content-around align-items-center">
                                <button id="chica" className="size">CH</button>
                                <button id="mediana" className="size">M</button>
                                <button id="grande" className="size">G</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text">Paso 3: Elige la frase que más te guste</h2>
                <section className="d-flex flex-wrap justify-content-around align-items-center">
                    <div className="row">
                        <div className="col-sm-6">
                            <button id="Aprende_a_Amar" className="phrases">
                                <div className="card card-phrase">
                                    <div className="card-body">
                                        <h5 className="card-title text">Aprende a amar</h5>
                                        <p className="card-text text-small">Izquierda: Eres suficiente y amada<br/>
                                        Derecha: Sé por ti y para ti
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button id="Hazlo_Brillar" className="phrases">
                                <div className="card card-phrase">
                                    <div className="card-body">
                                        <h5 className="card-title text">Hazlo brillar</h5>
                                        <p className="card-text text-small">Izquierda: No temas a la oscuridad<br/>
                                        Derecha: Brillas como estrella
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button id="Valora_los_dias" className="phrases">
                                <div className="card card-phrase">
                                    <div className="card-body">
                                        <h5 className="card-title text">Valora los días</h5>
                                        <p className="card-text text-small">Izquierda: Eres única e imperfecta<br/>
                                        Derecha: Eso te hace mágica
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button id="Yo_Soy" className="phrases">
                                <div className="card card-phrase">
                                    <div className="card-body">
                                        <h5 className="card-title text">Yo soy</h5>
                                        <p className="card-text text-small">Izquierda: Sé la mejor versión de tí<br/>
                                        Derecha: y ámate por ello
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <br/>
        </div>
    </div>

        

    )
}

export default Products