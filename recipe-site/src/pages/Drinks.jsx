import { drinksArray } from "../data/drinksData";
import RecipeCard from "../components/RecipeCard";

const Drinks = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="drinks_list">
      <h1 className="page-title"> Drinks </h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : drinksArray)}
        </div>
      }
    </div>
  );
};

export default Drinks;
