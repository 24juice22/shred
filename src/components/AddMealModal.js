import React, { useState } from 'react';
import ExitButton from './ExitButton';
import MealForm from './MealForm';
import MealList from './MealList';
import MealTotal from './MealTotal';

function AddMealModal({ addMealModalVisible, setAddMealModalVisible, setModal }) {
  const [mealList, setMealList] = useState([]);

  const mealModalStyle = {
    visibility: addMealModalVisible ? "visible" : "hidden",
    transform: addMealModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal modal--primary" style={mealModalStyle}>
        <ExitButton setVisibility={setAddMealModalVisible} setModal={setModal}/>    
        <h2 className="modal__title">Meals</h2>
        <MealForm setMealList={setMealList}/>
        <MealList mealList={mealList} />
        <MealTotal mealList={mealList}/>
    </div>
  )
}

export default AddMealModal