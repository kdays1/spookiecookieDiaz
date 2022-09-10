import React, { Component, useEffect, useState } from 'react';
import { Nav } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md">
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav>
                    <Link className="navbar-brand" to="/">Spookie Cookie</Link>
                </nav>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Nav.Link as={Link} to={'/ItemsCount'}>Productos</Nav.Link>
                        </li>
                        <li className="nav-item ">
                            <Nav.Link as={Link} to='/ItemsCount/01'>Chamarras</Nav.Link>
                        </li>
                        <li className="nav-item ">
                            <Nav.Link as={Link} to="/ItemsCount/02">Gorritos</Nav.Link>
                        </li>
                        <li className="nav-item ">
                            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                        </li>
                        <li className="nav-item">
                            <Nav.Link as={Link} to="/cart"> <FaShoppingCart /> Carrito</Nav.Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;