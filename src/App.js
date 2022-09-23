import React, { Component, useEffect, useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { CartProvider } from "./context/cartContext";
// import data from '../src/data/fakedb.json'


function App() {

    return (
        <>
        <CartProvider>
        <div>
        <Navbar />
        <h1>Welcome to Spookie Cookie!</h1>
        </div>
        </CartProvider>
        </>
    );
}

export default App;
