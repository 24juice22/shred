import React from 'react'

function AddWorkout({ setModal, setAddWorkoutModalVisible }) {

  function handleAddWorkoutClick() {
    setAddWorkoutModalVisible(true);
    setModal(true);
  }

  return (
    <button onClick={handleAddWorkoutClick}><i className="fa-solid fa-person-running btn btn--outline btn--add-workout"></i></button>
  )
}

export default AddWorkout