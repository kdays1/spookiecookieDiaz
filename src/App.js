import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import HowToBuy from './pages/howtobuy';
import Products from './pages/products';
import Cart from './pages/cart';
import ItemsCount from './pages/ItemsCount';

function App() {
  return (
    <>
        <Navbar />
        <h1>Welcome to Spookie Cookie!</h1>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/ItemsCount' element={<ItemsCount/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/howtobuy' element={<HowToBuy/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </>
  );
}

export default App;
