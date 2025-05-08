import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Entrees from "./pages/Entrees";
import Desserts from "./pages/Desserts";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Sides from "./pages/Sides";
import Drinks from "./pages/Desserts";
import { recipeArray } from "./data/homeData";
import RecipeCard from "./components/RecipeCard";
import { tabArray } from "./data/homeData";
import logo from "./images/logo.jpeg";
import Home from "./pages/Home";
import twitter from "./images/twitter.jpeg";
import pintrest from "./images/pintrest.jpeg";
import youtube from "./images/youtube.jpeg";
import instagram from "./images/instagram.jpeg";
import Recipe from "./pages/Recipe";
import { useState } from "react";

const App = () => {
  const [search, setSearchQuery] = useState("");
  console.log(search);
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
            <div className="logo-searchbar">
              <div className="logo">
                <a href="/">
                  <img className="logo-searchbar" src={logo} alt="" />{" "}
                </a>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search.."
                  onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="ribbons">
              <div className="ribbons-and-socials">
                <a href="#recipes">Recipes</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <img className="socials-logo" src={twitter} alt="" />
                <img className="socials-logo" src={pintrest} alt="" />
                <img className="socials-logo" src={instagram} alt="" />
                <img className="socials-logo" src={youtube} alt="" />
              </div>
            </div>
          </div>

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
            {<Route path="/recipe" element={<Recipe />}></Route>}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
