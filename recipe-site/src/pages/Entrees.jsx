import { entreesArray } from "../data/entreesData";
import RecipeCard from "../components/RecipeCard";


const Entrees = () => {
  const recipeCards = entreesArray.map((recipe) => {
    return <RecipeCard key={recipe.title} recipeData={recipe} />;
  });
  console.log(recipeCards);

  return (
    <div id= "entrees_list">
      <h1 className="page-title"> Entrees </h1>
      { <div className="recipe-box">{recipeCards}</div> }
    </div>
  );
};

export default Entrees;
