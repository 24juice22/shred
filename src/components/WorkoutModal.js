import React, { useState } from 'react';
import ExitButton from './ExitButton';
import ModalHeader from './ModalHeader';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';
import WorkoutTotal from './WorkoutTotal';

function WorkoutModal({ workoutModalVisible, setWorkoutModalVisible, setModal, dailyData, setDailyData }) {
  const [workoutList, setWorkoutList] = useState([]);

  const workoutModalStyle = {
    visibility: workoutModalVisible ? "visible" : "hidden",
    transform: workoutModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal" style={workoutModalStyle}>
        <ExitButton setVisibility={setWorkoutModalVisible} setModal={setModal}/>  
        <ModalHeader title="Workouts" styling={"modal__title-primary"}/>  
        <WorkoutForm setWorkoutList={setWorkoutList} setDailyData={setDailyData}/>
        <WorkoutList workoutList={workoutList} />
        <WorkoutTotal workoutCalories={dailyData.workoutCalories}/>
    </div>
  )
}

export default WorkoutModal