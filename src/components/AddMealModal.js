import React from 'react';
import ExitButton from './ExitButton';

function AddMealModal({ addMealModalVisible, setAddMealModalVisible, setModal }) {
  
  const mealModalStyle = {
    visibility: addMealModalVisible ? "visible" : "hidden",
    transform: addMealModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal modal--primary" style={mealModalStyle}>
        <ExitButton setVisibility={setAddMealModalVisible} setModal={setModal} />    
    </div>
  )
}

export default AddMealModal