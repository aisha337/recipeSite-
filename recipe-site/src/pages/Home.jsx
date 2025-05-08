import RecipeCard from "../components/RecipeCard";
import { recipeArray } from "../data/homeData";

const Home = () => {
  const recipeCards = recipeArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id="homepage" className="home-recipies-box">
      <h1 className="page-title"> All recipes</h1>
      <div className="recipe-box">{recipeCards}</div>
    </div>
  );
};

export default Home;
