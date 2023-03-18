import React, { useState } from 'react'

function MealForm({ setMealList }) {
    const [meal, setMeal] = useState({meal: "", calories: "", protein: ""});

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        setMeal(prevMeal => {
          return {
            ...prevMeal,
            [e.target.name]: newValue
          }
        });
    }
    
    function handleAdd(e) {
        e.preventDefault();
        setMealList(prevList => {
          return [...prevList, meal]
        });
        setMeal({meal: "", calories: "", protein: ""});
    }

  return (
    <form className="modal__form container__wide" onSubmit={handleAdd}>
        <div className="modal__inputs">
            <input 
                type="text"
                placeholder="Meal"
                value={meal.meal}
                onChange={handleChange}
                name="meal"
                required
                autoComplete='off'
                maxLength={15}
            />
            <input
                type="number"
                placeholder="Calories"
                value={meal.calories}
                onChange={handleChange}
                name="calories"
                required
                autoComplete='off'
                max={9999}
            />
            <input
                type="number"
                placeholder="Protein"
                value={meal.protein}
                onChange={handleChange}
                name="protein"
                required
                autoComplete='off'
                max={999}
            />
        </div>
        <button className="btn btn--white modal__btn">Add</button>
    </form>
  )
}

export default MealForm