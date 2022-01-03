import './RecipeCard.css'

export const RecipeCard = ({recipe, setSelectedRecipe}) => {
    return <div className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
        <h3>Title: {recipe.title}</h3>
        <h3>Time: {recipe.time}</h3>
    </div>
}