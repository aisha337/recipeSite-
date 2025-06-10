import "./App.css";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Entrees from "./pages/Entrees";
import Desserts from "./pages/Desserts";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Sides from "./pages/Sides";
import Drinks from "./pages/Drinks";
import { recipeArray } from "./data/homeData";
import { tabArray } from "./data/homeData";
import logo from "./images/logo.jpeg";
import Home from "./pages/Home";
import twitter from "./images/twitter.jpeg";
import pintrest from "./images/pintrest.jpeg";
import youtube from "./images/youtube.jpeg";
import instagram from "./images/instagram.jpeg";
import Recipe from "./pages/Recipe";
import { SearchBox } from "./components/searchBox";
import { breakfastArray } from "./data/breakfastData";
import { useMemo, useState } from "react";
import { entreesArray } from "./data/entreesData";
import { dessertsArray } from "./data/dessertsData";
import { drinksArray } from "./data/drinksData";
import { lunchArray } from "./data/lunchData";

const App = () => {
  const [search, setSearchQuery] = useState("");
  const recipeData = useMemo(
    () => [
      ...breakfastArray,
      ...recipeArray,
      ...dessertsArray,
      ...drinksArray,
      ...entreesArray,
      ...lunchArray,
    ],
    [
      breakfastArray,
      recipeArray,
      dessertsArray,
      drinksArray,
      entreesArray,
      lunchArray,
    ]
  );
  const filteredRecipe = recipeData.filter(
    (recipe) =>
      search.length > 0 &&
      recipe.title.toLowerCase().includes(search.toLowerCase())
  );
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
                <SearchBox setSearchQuery={setSearchQuery} search={search} />
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
            <Route
              path="/home"
              element={<Home recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/entrees"
              element={<Entrees recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/breakfast"
              element={<Breakfast recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/lunch"
              element={<Lunch recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/desserts"
              element={<Desserts recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/sides"
              element={<Sides recipes={filteredRecipe} />}
            ></Route>
            <Route
              path="/drinks"
              element={<Drinks recipes={filteredRecipe} />}
            ></Route>
            {
              <Route
                path="/recipe"
                element={<Recipe recipes={filteredRecipe} />}
              ></Route>
            }
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
