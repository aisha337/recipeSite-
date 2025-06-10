import { dessertsArray } from "../data/dessertsData";
import RecipeCard from "../components/RecipeCard";

const Desserts = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="desserts_list">
      <h1 className="page-title"> Desserts</h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : dessertsArray)}
        </div>
      }
    </div>
  );
};

export default Desserts;
