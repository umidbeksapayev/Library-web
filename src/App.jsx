import '../src/App.css'
import React from "react";
import Header from "./Components/Header/Header"; 
import Home from './Pages/Home/Home.jsx'
import Books from "./Pages/Books.jsx"
import Categories from "./Pages/Category/Categories.jsx"
import About from "./Pages/About.jsx";
import Login from "./Pages/Signin/Signin.jsx"
import SignUp from "./Pages/SignUp/SignUp.jsx";
import { Route, Routes,useLocation } from "react-router-dom";
import Footer from './Components/Footer/Footer.jsx';


function App() {
  const location = useLocation();
  const hideNav = location.pathname ==="/signin"|| location.pathname ==="/signup";
  return (
    <div>
      {!hideNav && <Header/>}
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </div>
      {!hideNav && <Footer/>}
    </div>
  );
}

export default App;
