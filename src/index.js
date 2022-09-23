import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './pages/home'
import Contact from './pages/contact';
import DetailedContainer from './pages/DetailedContainer';
import Detailed from "./pages/detailed";
import CartContainer from './pages/cartContainer';
import ItemsCountContainer from './pages/ItemsCountContainer';
import ItemsCount from "./pages/ItemsCount";
import { CartProvider } from "./context/cartContext";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5iG21A1qN4O6IMqqY_NGwHv7MwEd3eQE",
  authDomain: "spookiecookie.firebaseapp.com",
  projectId: "spookiecookie",
  storageBucket: "spookiecookie.appspot.com",
  messagingSenderId: "623906536946",
  appId: "1:623906536946:web:06647acc6780d6f328bf6b",
  measurementId: "G-M5L27JFZ4E"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route exact path='/ItemsCount' element={<ItemsCountContainer/>} />
      <Route exact path='/detailed' element={<DetailedContainer/>} />
      <Route path='/detailed/:itemId' element={<Detailed/>} />
      <Route path='/ItemsCount/:categoryId' element={<ItemsCount  />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<CartContainer/>} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
