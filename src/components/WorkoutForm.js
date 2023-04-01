import React, { useState } from 'react'

function WorkoutForm({ setWorkoutList, setDailyData, dailyData }) {
    const [workout, setWorkout] = useState({exercise: "", calories: ""});

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        setWorkout(prevWorkout => {
          return {
            ...prevWorkout,
            [e.target.name]: newValue
          }
        });
    }
    
    const handleAdd = async(e) => {
        e.preventDefault();
        setWorkoutList(prevList => {
          return [...prevList, workout]
        });
        setWorkout({exercise: "", calories: ""});
        setDailyData(prevData => {
          return {
            ...prevData,
            workoutCalories: prevData.workoutCalories + Number(workout.calories)
          }
        })
        try {
          const res = await fetch(
            "https://sheet.best/api/sheets/491bac55-102a-431d-a4b8-23a91fbff86e",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dailyData),
            }
          );
        } catch (error) {
          console.log(error);
        }
    };

  return (
    <form className="modal__form container__wide" onSubmit={handleAdd}>
        <div className="modal__inputs">
            <input 
                type="text"
                placeholder="Exercise"
                value={workout.exercise}
                onChange={handleChange}
                name="exercise"
                required
                autoComplete='off'
                maxLength={16}
            />
            <input
                type="text"
                placeholder="Calories"
                value={workout.calories}
                onChange={handleChange}
                name="calories"
                required
                autoComplete='off'
                maxLength={4}
            />
        </div>
        <button className="btn modal__btn">Add</button>
    </form>
  )
}

export default WorkoutForm