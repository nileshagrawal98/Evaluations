import './RecipeInfo.css'

export const RecipeInfo = ({ recipe }) => {
    return <div className="recipe-info">
        <div>
            <p>Title: {recipe.title}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Time To Cook: {recipe.time}</p>
            <p>Instructions: {recipe.instructions}</p>
        </div>
        <div>
            <img src={recipe.image} alt={recipe.title} width="100"/>
        </div>

    </div>

}