import React, { Component, useEffect, useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { CartProvider } from "./context/cartContext";
import './pages/general_styles.css'
// import data from '../src/data/fakedb.json'


function App() {

    return (
        <>
        <CartProvider>
        <div>
        <Navbar />
        <h1 className="text-center">Spookie Cookie 🤍 </h1>
        <h6 className="text-center">Love yourself and spread that love </h6>
        <br/>
        </div>
        </CartProvider>
        </>
    );
}

export default App;
