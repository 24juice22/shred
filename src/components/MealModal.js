import React, { useState } from 'react';
import ExitButton from './ExitButton';
import ModalHeader from './ModalHeader';
import MealForm from './MealForm';
import MealList from './MealList';
import MealTotal from './MealTotal';

function MealModal({ mealModalVisible, setMealModalVisible, setModal, dailyData, setDailyData }) {
  const [mealList, setMealList] = useState([]);

  const mealModalStyle = {
    visibility: mealModalVisible ? "visible" : "hidden",
    transform: mealModalVisible ? "scale(1)" : "scale(0.1)"
  }
 
  return (
    <div className="modal modal--primary" style={mealModalStyle}>
        <ExitButton setVisibility={setMealModalVisible} setModal={setModal}/>   
        <ModalHeader title="Meals"/> 
        <MealForm setMealList={setMealList} mealList={mealList} dailyData={dailyData} setDailyData={setDailyData}/>
        <MealList mealList={mealList} />
        <MealTotal dailyData={dailyData}/>
    </div>
  )
}

export default MealModal