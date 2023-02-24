import React from 'react';
import ExitButton from './ExitButton';

function AddMealModal({ addMealModalVisible, setAddModalVisible, setModal }) {
  const mealModalStyle = {
    visibility: addMealModalVisible ? "visible" : "hidden",
    transform: addMealModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal modal--add-meal" style={mealModalStyle}>
        <ExitButton setVisibility={setAddModalVisible} setModal={setModal} />    
    </div>
  )
}

export default AddMealModal