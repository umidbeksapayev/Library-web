import '../src/App.css'
import React from "react";
import Header from "./Components/Header/Header"; 
import Home from './Pages/Home.jsx'
import Books from "./Pages/Books.jsx"
import Categories from "./Pages/Categories.jsx"
import About from "./Pages/About.jsx";
import Login from "./Pages/Login.jsx"
import SignUp from "./Pages/SignUp.jsx";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
