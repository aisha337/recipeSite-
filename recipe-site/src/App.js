import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Entrees from "./pages/Entrees";
import Desserts from "./pages/Desserts";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Sides from "./pages/Sides";
import Drinks from "./pages/Desserts";
import { recipeArray } from "./data";
import RecipeCard from "./components/RecipeCard";

const App = () => {
  const tabArray = [
    { name: "Entrees", colour: "#f2f4c2", fontColour: "#879d57" },
    { name: "Breakfast", colour: "#EFEDF8", fontColour: "#817d98" },
    { name: "Lunch", colour: "#e5f7f5", fontColour: "#64938c" },
    { name: "Desserts", colour: "#e7f6fd", fontColour: "#8ba5b7" },
    { name: "Sides", colour: "#feeecb", fontColour: "#b29466" },
    { name: "Drinks", colour: "#ffebe4", fontColour: "#cf7973" },
  ];
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
  const recipeCards = recipeArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);
  return (
    <BrowserRouter>
      <>
        <div className="App">
          <h1 className="page-title"> All recipes</h1>
          <nav className="navbar">{navBarLinks}</nav>
          <div className="recipe-box">{recipeCards}</div>

          <Routes>
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
