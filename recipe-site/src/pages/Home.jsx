import RecipeCard from "../components/RecipeCard";
import { recipeArray } from "../data";

const Home = () => {
    const recipeCards = recipeArray.map((recipe) => {
        return <RecipeCard key={recipe.title} recipeData={recipe} />;
      });
  console.log(recipeCards);

  return (
    <div id= "home_recipes">
      <h1 className="page-title"> Home</h1>
      <div className="recipe-box">{recipeCards}</div> 
    </div>
  );
};

export default Home;
