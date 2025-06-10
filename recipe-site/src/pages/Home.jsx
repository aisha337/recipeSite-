import RecipeCard from "../components/RecipeCard";
import { recipeArray } from "../data/homeData";

const Home = ({ recipes }) => {
  const mapSearchedRecipes = (recipeList) => {
    return recipeList.map((recipe) => {
      return <RecipeCard key={recipe.title} recipeData={recipe} />;
    });
  };
  console.log(recipes);

  return (
    <div id="homepage" className="home-recipies-box">
      <h1 className="page-title"> All recipes</h1>
      <div className="recipe-box">
        {mapSearchedRecipes(recipes.length ? recipes : recipeArray)}
      </div>
    </div>
  );
};

export default Home;
