import { breakfastArray } from "../data/breakfastData";
import RecipeCard from "../components/RecipeCard";
import { recipeArray } from "../data";

const Breakfast = () => {
  const recipeCards = breakfastArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "breakfast_list">
      <h1 className="page-title"> Breakfast</h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Breakfast;
