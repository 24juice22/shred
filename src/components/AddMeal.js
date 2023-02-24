import React from 'react'

function AddMeal({ setAddMealModalVisible, setModal }) {

  function handleAddMealClick() {
    setAddMealModalVisible(true);
    setModal(true);
  }

  return (
    <button className="btn btn--outline btn--add-meal" onClick={handleAddMealClick}>+</button>
  )
}

export default AddMeal