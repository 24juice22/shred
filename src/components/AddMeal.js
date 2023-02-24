import React from 'react'

function AddMeal({ setAddMealModalVisible }) {

  function handleAddMealClick() {
    setAddMealModalVisible(true);
  }

  return (
    <button className="btn btn--outline btn--add-meal" onClick={handleAddMealClick}>+</button>
  )
}

export default AddMeal