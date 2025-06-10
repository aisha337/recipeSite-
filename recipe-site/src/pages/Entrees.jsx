import { entreesArray } from "../data/entreesData";
import RecipeCard from "../components/RecipeCard";

const Entrees = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };

  return (
    <div id="entrees_list">
      <h1 className="page-title"> Entrees </h1>
      {
        <div className="recipe-box">
          {mapSearchedRecipes(recipes.length ? recipes : entreesArray)}
        </div>
      }
    </div>
  );
};

export default Entrees;
