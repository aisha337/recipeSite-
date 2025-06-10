import { breakfastArray } from "../data/breakfastData";
import RecipeCard from "../components/RecipeCard";

const Breakfast = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="breakfast_list">
      <h1 className="page-title"> Breakfast</h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : breakfastArray)}
        </div>
      }
    </div>
  );
};

export default Breakfast;
