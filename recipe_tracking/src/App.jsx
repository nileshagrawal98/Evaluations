import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { useEffect, useState } from 'react';
import { RecipeInfo } from './components/RecipeInfo';

const initForm = {
  title: '',
  ingredients: '',
  time: '',
  image: '',
  instructions: '',
}

function App() {

  const [form, setForm] = useState(initForm);
  const [recipes, setRecipes] = useState([]);
  const [changed, setChanged] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getRecipes = () => {
    fetch('http://localhost:3001/recipe/').then(res => res.json()).then(data => setRecipes(data));
  }

  useEffect(() => (
    getRecipes()
  ), [changed]);

  return (
    <div className="App">
      <h1>Recipes</h1>
      <div className="top-section">
        <Form setForm={setForm} form={form} setChanged={setChanged} />
        <List recipes={recipes} setSelectedRecipe={setSelectedRecipe} setRecipes={setRecipes}/>
      </div>
      {selectedRecipe && <RecipeInfo recipe={selectedRecipe} />}
    </div>
  );
}

export default App;
