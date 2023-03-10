import React from 'react'

function AddMeal({ setAddMealModalVisible, setModal }) {

  function handleAddMealClick() {
    setAddMealModalVisible(true);
    setModal(true);
  }

  return (
       <button className="btn btn--add btn--add-meal"onClick={handleAddMealClick}><i className="fa-solid fa-carrot"></i></button>
  )
}

export default AddMeal