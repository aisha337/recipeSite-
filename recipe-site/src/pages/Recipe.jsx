import { useSearchParams } from "react-router-dom";
import { recipes } from "../data/recipeData";
import "../components/Recipe.css";
import { useState } from "react";

const Recipe = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("recipe");
  console.log(queryValue);
  console.log(recipes);

  const recipeDetails = recipes.find((recipe) => recipe.id === queryValue);
  console.log(recipeDetails);

  console.log("Instructions:", recipeDetails.instructions);
  const [recipeCount, setRecipeCount] = useState(2);

  return (
    <div>
      <div id="recipe_container">
        <h1 className="page-title"> {recipeDetails.name}</h1>
      </div>
      <div
        className="recipe-image"
        style={{ backgroundImage: `url(${recipeDetails.image})` }}
      ></div>

      <div id="recipe_ingredients">
        <ul className="recipe-ingredients">
          <h2>Ingredients</h2>
          {Object.keys(recipeDetails.ingredients).map((key, index) => (
            <li key={index}>
              {recipeDetails.ingredients[key] * recipeCount} {key}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setRecipeCount((prev) => prev + 1);
          }}
        >
          add one
        </button>
        <button
          onClick={() => {
            setRecipeCount((prev) => {
              console.log(prev);
              if (prev !== 1) return prev - 1;
              return 1;
            });
          }}
        >
          minus one
        </button>
      </div>
      <div id="recipe_instructions">
        <ol className="recipe-details">
          <h2>Instructions</h2>
          {recipeDetails.instructions.map((instructon, index) => (
            <li key={index}>{instructon}</li>
          ))}
        </ol>
      </div>
      <div className="recipe-details">
        <h2>How to make</h2>
        <p> {recipeDetails.howToMake}</p>
      </div>
      <div className="recipe-details">
        <h2>Subsitions</h2>
        <p> {recipeDetails.Subsitions}</p>
      </div>
    </div>
  );
};

export default Recipe;
