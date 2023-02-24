import React from 'react'

function AddMeal({ setAddMealModalVisible, setModal }) {

  function handleAddMealClick() {
    setAddMealModalVisible(true);
    setModal(true);
  }

  return (
    <button onClick={handleAddMealClick}><i className="fa-solid fa-carrot btn btn--outline btn--add-meal"></i></button>
  )
}

export default AddMeal