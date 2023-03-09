import React, { useState } from 'react';
import ExitButton from './ExitButton';
import Workout from './Workout';

function AddWorkoutModal({ addWorkoutModalVisible, setAddWorkoutModalVisible, setModal }) {
  const [workoutList, setWorkoutList] = useState([]);
  const [workout, setWorkout] = useState({exercise: "", calories: ""});

  const workoutModalStyle = {
    visibility: addWorkoutModalVisible ? "visible" : "hidden",
    transform: addWorkoutModalVisible ? "scale(1)" : "scale(0.1)"
  }
  
  function handleChange(e) {
    setWorkout(prevWorkout => {
      return {
        ...prevWorkout,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleAdd(e) {
    e.preventDefault();
    setWorkoutList(prevList => {
      return [...prevList, workout]
    })
  }

  const displayWorkoutList = workoutList.map((workout,index) => 
    <Workout exercise={workout.exercise} calories={workout.calories} key={index}/>
  )

  return (
    <div className="modal" style={workoutModalStyle}>
        <ExitButton setVisibility={setAddWorkoutModalVisible} setModal={setModal}/>    
        <h2 className="modal__title modal__title-primary">Workouts</h2>
        <form className="modal__form container__wide" onSubmit={handleAdd}>
            <div className="modal__inputs">
                <input 
                    type="text"
                    placeholder="Exercise"
                    value={workout.exercise}
                    onChange={handleChange}
                    name="exercise"
                />
            </div>
            <div className="modal__inputs">
                <input
                    type="text"
                    placeholder="Calories"
                    value={workout.calories}
                    onChange={handleChange}
                    name="calories"
                />
            </div>
            <button className="btn modal__btn">Add</button>
        </form>
        <div className="modal__list modal__list--workouts">
          {displayWorkoutList}
        </div>
    </div>
  )
}

export default AddWorkoutModal