import { lunchArray } from "../data/lunchData";
import RecipeCard from "../components/RecipeCard";

const Lunch = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="lunch_list">
      <h1 className="page-title"> Lunch</h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : lunchArray)}
        </div>
      }
    </div>
  );
};

export default Lunch;
