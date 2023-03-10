import React, { useState } from 'react';
import ExitButton from './ExitButton';
import WorkoutModalForm from './WorkoutModalForm';
import WorkoutModalList from './WorkoutModalList';
import WorkoutTotal from './WorkoutTotal';

function WorkoutModal({ workoutModalVisible, setWorkoutModalVisible, setModal }) {
  const [workoutList, setWorkoutList] = useState([]);

  const workoutModalStyle = {
    visibility: workoutModalVisible ? "visible" : "hidden",
    transform: workoutModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal" style={workoutModalStyle}>
        <ExitButton setVisibility={setWorkoutModalVisible} setModal={setModal}/>    
        <h2 className="modal__title modal__title-primary">Workouts</h2>
        <WorkoutModalForm setWorkoutList={setWorkoutList}/>
        <WorkoutModalList workoutList={workoutList} />
        <WorkoutTotal workoutList={workoutList}/>
    </div>
  )
}

export default WorkoutModal