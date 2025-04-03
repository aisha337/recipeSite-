import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Entrees from "./pages/Entrees";
import Desserts from "./pages/Desserts";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Sides from "./pages/Sides";
import Drinks from "./pages/Desserts";
import { recipeArray } from "./data";
import RecipeCard from "./components/RecipeCard";
import { tabArray } from "./data";
import logo from "./images/logo.jpeg";
import Home from "./pages/Home";

const App = () => {
  const navBarLinks = tabArray.map((tab) => {
    return (
      <Link
        key={tab.name}
        style={{ backgroundColor: tab.colour, color: tab.fontColour }}
        className="navbar-link"
        to={`/${tab.name.toLowerCase()}`}
      >
        {tab.name.toUpperCase()}{" "}
      </Link>
    );
  });

  return (
    <BrowserRouter>
      <>
        <div className="App">
          <div className="search-bar-ribbons">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search.."></input>
            </div>
            <div className="ribbons">
              <a href="#recipes">Recipes</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <h1 className="page-title"> All recipes</h1>
          <nav className="navbar">{navBarLinks}</nav>

          <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/entrees" element={<Entrees />}></Route>
            <Route path="/breakfast" element={<Breakfast />}></Route>
            <Route path="/lunch" element={<Lunch />}></Route>
            <Route path="/desserts" element={<Desserts />}></Route>
            <Route path="/sides" element={<Sides />}></Route>
            <Route path="/drinks" element={<Drinks />}></Route>
            
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
