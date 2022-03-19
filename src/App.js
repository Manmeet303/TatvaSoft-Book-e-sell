import React from "react";
import {Route , BrowserRouter} from "react-router-dom";
import './App.css';

//Import Header and Footer Component here 
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

//import Home page here 
import Home from "../src/Views/Pages/Home";

function App() {
  return (
   <>
   <BrowserRouter className="App">
      <Header />
      <Home />
      <Footer />
   
   </BrowserRouter>
   </>
  );
}

export default App;
