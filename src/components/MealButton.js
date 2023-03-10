import React from 'react'

function MealButton({ setMealModalVisible, setModal }) {

  function handleAddMealClick() {
    setMealModalVisible(true);
    setModal(true);
  }

  return (
       <button className="btn btn--add btn--add-meal"onClick={handleAddMealClick}><i className="fa-solid fa-carrot"></i></button>
  )
}

export default MealButton