import { sidesArray } from "../data/sidesData";
import RecipeCard from "../components/RecipeCard";


const Sides = () => {
  const recipeCards = sidesArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "sides_list">
      <h1 className="page-title"> Sides</h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Sides;
