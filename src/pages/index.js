import './styles.css'

const Home = () => {
    return (
        <div>
            <section className="container"> 
        <div className="container ">

            <img className="pic" src={'../image/example1.jpg'}/>
            <img className="pic" src={'../image/example2.jpg'}/>
            <img className="pic" src={'../image/example3.jpg'}/>
            <img className="pic" src={'../image/example4.jpg'}/>

        </div>
        <p className="text">
            Somos una empresa mexicana que vende ropa con magia y amor. Nuestras chamarras buscan que te sientas como una persona especial, amada y feliz. Ámate sin medidas y sé feliz con exceso.
        </p>
    </section>

    <section className="container d-flex flex-md-row flex-lg-row flex-sm-column flex-column justify-content-center align-items-center">
        <div className="inspo_img d-flex justify-content-center">
            <img className="inspo__img mx-auto d-block" src={'../image/inpiracionyou2.jpg'}/>
            </div>
            <div className="inspo__text text">
                <h2>Nuestra Inspiración</h2>
                <p className="text">
                    ¡Eres TÚ! Creemos que cada persona es un universo lleno de creatividad y queremos celebrarlo. Cada uno de nuestros productos puede ser confeccionado en el color que desees y elegir la frase que más te guste.
                </p>
            </div>
    </section>

    <section className="container-fluid d-flex flex-row flex-wrap justify-content-center">
        <img className="pic" src={'../image/example1.jpg'}/> 
        <img className="pic" src={'../image/example2.jpg'}/>
        <img className="pic" src={'../image/example3.jpg'}/>
        <img className="pic" src={'../image/example4.jpg'}/>
    </section>

    <footer className="bg-light text-center text-white footer">
        <div className="p-4 pb-0">
            <section>
                <a className="btn btn-floating m-1" href="https://www.facebook.com" role="button"> 
                    <img className="img-thumbnail footer__thumbnail" src={'../image/fb.jpg'}/>
                </a>
                <a className="btn btn-floating m-1" href="https://www.instagram.com" role="button">
                    <img className="img-thumbnail footer__thumbnail" src={'../image/ig.jpg'}/>
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