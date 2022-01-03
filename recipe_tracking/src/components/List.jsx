import { RecipeCard } from "./RecipeCard"
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from 'react';
import './List.css'
export const List = ({ recipes, setSelectedRecipe, setRecipes }) => {

    const [sort, setSort] = useState();

    const handleChange = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        fetch((`http://localhost:3001/recipe?_sort=${sort}&_order=asc`))
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [sort]);



    return <div  className="list-container">
        <div>
            <label>Sort: </label>
            <select onChange={(e) => handleChange(e)}>
                <option value="title">Title</option>
                <option value="time">Time</option>
            </select>
        </div>
        <div>
            {recipes.map(n => {
                return <RecipeCard recipe={n} key={uuidv4()} setSelectedRecipe={setSelectedRecipe} />
            })}
        </div>
    </div>

}