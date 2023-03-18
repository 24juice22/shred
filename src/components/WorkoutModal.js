import React, { useState } from 'react';
import ExitButton from './ExitButton';
import ModalHeader from './ModalHeader';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
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
        <ModalHeader title="Workouts" styling={"modal__title-primary"}/>  
        <WorkoutForm setWorkoutList={setWorkoutList}/>
        <WorkoutList workoutList={workoutList} />
        <WorkoutTotal workoutList={workoutList}/>
    </div>
  )
}

export default WorkoutModal