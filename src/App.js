import React, { Component, useEffect, useState } from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import DetailedContainer from './pages/DetailedContainer';
import Detailed from "./pages/detailed";
import Cart from './pages/cart';
import ItemsCountContainer from './pages/ItemsCountContainer';
import ItemsCount from "./pages/ItemsCount";
// import data from '../src/data/fakedb.json'


function App() {
    const [data, setData] = useState([]);
    const getDB = async()=> {
        fetch('/data/fakedb.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }) 
        .then (function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(dataInJson) {
            const items = dataInJson.productos;
            setData(items);
        })    
    } 
    useEffect(()=>{
        getDB();
    },[])

    const [details, setDetails] = useState([]);
    const getDetails = async() => {
        fetch('/data/fakeDetails.json', {
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
            const items2 = dataInJson.productos;
            console.log(items2);
            setDetails(items2);
        })
    }

    useEffect(()=>{
        getDetails();
    },[])

    return (
    <>
        <Navbar />
        <h1>Welcome to Spookie Cookie!</h1>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route exact path='/ItemsCount' element={<ItemsCountContainer data={data}/>} />
            <Route exact path='/detailed' element={<DetailedContainer details={details}/>} />
            <Route path='/detailed/:itemId' element={<Detailed details={details}/>} />
            <Route path='/ItemsCount/:categoryId' element={<ItemsCount  data={data} />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </>
    );
}

export default App;
