import React from 'react'

function AddMealModal({ addMealModalVisible }) {
  const mealModalStyle = {
    visibility: addMealModalVisible ? "visible" : "hidden",
    transform: addMealModalVisible ? "scale(1)" : "scale(0.1)"
  }

  return (
    <div className="modal modal--add-meal" style={mealModalStyle}>
    </div>
  )
}

export default AddMealModal