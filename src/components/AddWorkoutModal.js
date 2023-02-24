import React from 'react';
import ExitButton from './ExitButton';

function AddWorkoutModal({ addWorkoutModalVisible, setAddWorkoutModalVisible, setModal }) {

  const workoutModalStyle = {
    visibility: addWorkoutModalVisible ? "visible" : "hidden",
    transform: addWorkoutModalVisible ? "scale(1)" : "scale(0.1)"
  }  

  return (
    <div className="modal" style={workoutModalStyle}>
        <ExitButton setVisibility={setAddWorkoutModalVisible} setModal={setModal} />    
        <h2 className="modal__title">Workouts</h2>
    </div>
  )
}

export default AddWorkoutModal