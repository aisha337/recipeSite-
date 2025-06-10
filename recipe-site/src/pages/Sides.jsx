import { sidesArray } from "../data/sidesData";
import RecipeCard from "../components/RecipeCard";

const Sides = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="sides_list">
      <h1 className="page-title"> Sides</h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : sidesArray)}
        </div>
      }
    </div>
  );
};

export default Sides;
