import React, { Component, useEffect, useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import DetailedContainer from './pages/DetailedContainer';
import Detailed from "./pages/detailed";
import CartContainer from './pages/cartContainer';
import ItemsCountContainer from './pages/ItemsCountContainer';
import ItemsCount from "./pages/ItemsCount";
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
