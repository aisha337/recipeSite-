import "./RecipeCard.css"
const RecipeCard = ({recipeData}) =>{
    return <div className="recipe-container">
        <span> {`${recipeData.title}`} </span>
    </div>
}

export default RecipeCard