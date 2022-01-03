import { useState } from 'react';
import './Form.css'
const initForm = {
    title: '',
    ingredients: '',
    time: '',
    image: '',
    instructions: '',
}

export const Form = ({ form, setForm, setChanged }) => {

    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (!form.image) {
            fetch('https://foodish-api.herokuapp.com/api/')
                .then(res => res.json())
                .then(data => postFormData(data.image));
        } else {
            postFormData(null);
        }
    }

    const postFormData = (imageLink) => {
        const payload = {
            title: form.title,
            ingredients: form.ingredients,
            time: form.time,
            image: imageLink || form.image ,
            instructions: form.instructions,
        }

        fetch('http://localhost:3001/recipe/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-Type': 'application/json',
            }
        }).then(() => setChanged((prev) => prev + 1))
            .then(() => setForm(initForm));
    }

    return <form onSubmit={(e) => submitForm(e)}>
        <div>
            <label>Title: </label>
            <input type="text" name="title" onChange={(e) => handleChange(e)} value={form.title} />
        </div>
        <div>
            <label>Ingredients: </label>
            <input type="text" name="ingredients" onChange={(e) => handleChange(e)} value={form.ingredients} />
        </div>
        <div>
            <label>Time To Cook(min): </label>
            <input type="number" name="time" onChange={(e) => handleChange(e)} value={form.time} />
        </div>
        <div>
            <label>Image Link: </label>
            <input type="text" name="image" onChange={(e) => handleChange(e)} value={form.image} />
        </div>
        <div>
            <label>Instructions: </label>
            <input type="text" name="instructions" onChange={(e) => handleChange(e)} value={form.instructions} />
        </div>
        <input type="submit" className='submit-btn' />
        <p className='note-text'>*To get random image, leave image link field blank.</p>
    </form>
}