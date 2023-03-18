import React, { useState } from 'react';
import ExitButton from './ExitButton';
import ModalHeader from './ModalHeader';
import MealForm from './MealForm';
import MealList from './MealList';
import MealTotal from './MealTotal';

function MealModal({ mealModalVisible, setMealModalVisible, setModal }) {
  const [mealList, setMealList] = useState([]);

  const mealModalStyle = {
    visibility: mealModalVisible ? "visible" : "hidden",
    transform: mealModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal modal--primary" style={mealModalStyle}>
        <ExitButton setVisibility={setMealModalVisible} setModal={setModal}/>   
        <ModalHeader title="Meals"/> 
        <MealForm setMealList={setMealList}/>
        <MealList mealList={mealList} />
        <MealTotal mealList={mealList}/>
    </div>
  )
}

export default MealModal