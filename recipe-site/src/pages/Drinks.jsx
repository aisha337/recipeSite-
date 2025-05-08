import { drinksArray } from "../data/drinksData";
import RecipeCard from "../components/RecipeCard";


const Drinks = () => {
  const recipeCards = drinksArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "drinks_list">
      <h1 className="page-title"> Drinks </h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Drinks;
