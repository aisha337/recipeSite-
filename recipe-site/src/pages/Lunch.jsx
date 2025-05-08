import { lunchArray } from "../data/lunchData";
import RecipeCard from "../components/RecipeCard";


const Lunch = () => {
  const recipeCards = lunchArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "lunch_list">
      <h1 className="page-title"> Lunch</h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Lunch;
