import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav>
                    <Link className="navbar-brand" to="/about">Spookie Cookie</Link>
                </nav>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="../../index.js">Inicio</a> */}
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            {/* <Link className="navbar-brand" to="/index">Home</Link> */}
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="../pages/nuestrahistoria.js">Nuestra Historia</a> */}
                            <Nav.Link as={Link} to="/about">Nuestra Historia</Nav.Link>
                            {/* <Link className="navbar-brand" to="/about">Nuestra Historia</Link> */}
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="Products">Productos</a> */}
                            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                            {/* <Link className="navbar-brand" to="/products">Productos</Link> */}
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="../pages/comprar.js">¿Cómo comprar?</a> */}
                            <Nav.Link as={Link} to="/howtobuy">Cómo comprar</Nav.Link>
                            {/* <Link className="navbar-brand" to="/howtobuy">Cómo comprar</Link> */}
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="../pages/contacto.js">Contacto</a> */}
                            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                            {/* <Link className="navbar-brand" to="/contact">Contacto</Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <a id="theCart" className="nav-link" href="../pages/cart.js">Carrito</a> */}
                            <Nav.Link as={Link} to="/cart"> <FaShoppingCart /> Carrito</Nav.Link>
                            {/* <Link className="navbar-brand" to="/cart">Carrito</Link> */}
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;