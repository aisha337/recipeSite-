import { useSearchParams } from "react-router-dom";
import { recipes } from "../data/recipeData";

const Recipe = () => {
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("recipe");
  console.log(queryValue);
  console.log(recipes);

  const recipeDetails = recipes.find((recipe) => recipe.id === queryValue);
  console.log(recipeDetails);

  return (
    <div id="recipe_container">
      <h1 className="page-title"> {recipeDetails.name}</h1>
    </div>
  );
};

export default Recipe;
