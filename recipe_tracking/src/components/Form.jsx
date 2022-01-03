import {useState} from 'react';
import './Form.css'
export const Form = ({form, setForm,setChanged}) => {

    const handleChange = (e) => {
        let {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/recipe/', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'content-Type': 'application/json',
            }
        }).then(() => setChanged((prev) => prev + 1));
    }

    return <form onSubmit={(e) => submitForm(e)}>
        <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Ingredients: </label>
            <input type="text" name="ingredients" onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Time To Cook: </label>
            <input type="text" name="time"onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Image Link: </label>
            <input type="text" name="image"onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Instructions: </label>
            <input type="text" name="instructions"onChange={(e) => handleChange(e)}/>
        </div>
        <input type="submit" className='submit-btn'/>
    </form>
}