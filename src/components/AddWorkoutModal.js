import React, { useState } from 'react';
import ExitButton from './ExitButton';
import WorkoutModalForm from './WorkoutModalForm';
import WorkoutModalList from './WorkoutModalList';
import WorkoutTotal from './WorkoutTotal';

function AddWorkoutModal({ addWorkoutModalVisible, setAddWorkoutModalVisible, setModal }) {
  const [workoutList, setWorkoutList] = useState([]);

  const workoutModalStyle = {
    visibility: addWorkoutModalVisible ? "visible" : "hidden",
    transform: addWorkoutModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal" style={workoutModalStyle}>
        <ExitButton setVisibility={setAddWorkoutModalVisible} setModal={setModal}/>    
        <h2 className="modal__title modal__title-primary">Workouts</h2>
        <WorkoutModalForm setWorkoutList={setWorkoutList}/>
        <WorkoutModalList workoutList={workoutList} />
        <WorkoutTotal workoutList={workoutList}/>
    </div>
  )
}

export default AddWorkoutModal