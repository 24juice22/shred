import React from 'react'

function ModalContainer({ modal, setModal, setAddMealModalVisible, setAddWorkoutModalVisible }) {
  
  const modalContainerStyle = {
    visibility: modal ? "visible" : "hidden"
  }

  function handleModalContainer() {
    setModal(false);
    setAddMealModalVisible(false);
    setAddWorkoutModalVisible(false);
  }

  return (
    <div 
        className="modal-container" 
        onClick={handleModalContainer} 
        style={modalContainerStyle}
    >
    </div>
  )
}

export default ModalContainer