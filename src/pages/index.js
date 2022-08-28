const Home = () => {
    return (
        <div>
            <section className="container"> 
                <h1>Spookie Cookie</h1> 
        <div className="container">

            <img className="spookie" src={window.location.origin + '../image/spookie.jpg/'}/>
            <img className="cookie1" src={window.location.origin + '../image/cookie.jpg/'}/>
            <img className="cookie2" src={window.location.origin + '../image/cookie2.jpg/'}/>
            <img className="cookie3" src={window.location.origin + '../image/cookie3.jpg/'}/>

        </div>
        <p className="text">
            Somos una empresa mexicana que vende ropa con magia y amor. Nuestras chamarras buscan que te sientas como una persona especial, amada y feliz. Ámate sin medidas y sé feliz con exceso.
        </p>
    </section>

    <section className="container d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-center align-items-center">
        <div className="inspo_img d-flex justify-content-center">
            <img className="inspo__img mx-auto d-block" src={window.location.origin + '../image/inpiracionyou2.jpg'}/>
            </div>
            <div className="inspo__text text">
                <h2>Nuestra Inspiración</h2>
                <p className="text">
                    ¡Eres TÚ! Creemos que cada persona es un universo lleno de creatividad y queremos celebrarlo. Cada uno de nuestros productos puede ser confeccionado en el color que desees y elegir la frase que más te guste.
                </p>
            </div>
    </section>

    <section className="prod__muestra container-fluid d-flex flex-row flex-wrap justify-content-center">
        <img className="prod__muestra_img" src={window.location.origin + '../image/example1.jpg/'}/> 
        <img className="prod__muestra_img" src={window.location.origin + '../image/example2.jpg/'}/>
        <img className="prod__muestra_img" src={window.location.origin + '../image/example3.jpg/'}/>
        <img className="prod__muestra_img" src={window.location.origin + '../image/example4.jpg/'}/>
    </section>

    <footer className="bg-light text-center text-white footer">
        <div className="p-4 pb-0">
            <section>
                <a className="btn btn-floating m-1" href="https://www.facebook.com" role="button"> 
                    <img className="img-thumbnail footer__thumbnail" src={window.location.origin + '../image/fb.jpg/'}/>
                </a>
                <a className="btn btn-floating m-1" href="https://www.instagram.com" role="button">
                    <img className="img-thumbnail footer__thumbnail" src={window.location.origin + '../image/ig.jpg/'}/>
                </a>
            </section>
        </div>

        <div className="text-center p-3">
            © 2022 Copyright
        </div>
    </footer>
        </div>
    )
}

export default Home