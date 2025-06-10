import "./RecipeCard.css";
import { tabArray } from "../data/homeData";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipeData }) => {
  const relevantRecipeTag = tabArray.find((tab) => {
    return tab.name === recipeData.tab;
  });

  return (
    <Link key={recipeData.title} to={recipeData.url}>
      <div className="recipe-container">
        <div
          className="recipe-box-image"
          style={{ backgroundImage: `url(${recipeData.image})` }}
        ></div>
        <div className="recipe-title">
          <span> {`${recipeData.title}`} </span>
        </div>
        <div className="recipe-tab-duration">
          <div className="recipe-tab">
            <div
              key={relevantRecipeTag.name}
              style={{
                backgroundColor: relevantRecipeTag.colour,
                color: relevantRecipeTag.fontColour,
              }}
              className="navbar-link"
              to={`/${relevantRecipeTag.name.toLowerCase()}`}
            >
              {relevantRecipeTag.name.toUpperCase()}
            </div>
          </div>
          <div className="recipe-duration">
            <span> {`${recipeData.duration}`} </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
