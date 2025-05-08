import { dessertsArray } from "../data/dessertsData"
import RecipeCard from "../components/RecipeCard";


const Desserts = () => {
  const recipeCards = dessertsArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "desserts_list">
      <h1 className="page-title"> Desserts</h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Desserts;