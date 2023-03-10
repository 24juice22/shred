import React from 'react'

function ModalContainer({ modal, setModal, setTDEEModalVisible, setMealModalVisible, setWorkoutModalVisible }) {
  
  const modalContainerStyle = {
    visibility: modal ? "visible" : "hidden"
  }

  function handleModalContainer() {
    setModal(false);
    setTDEEModalVisible(false)
    setMealModalVisible(false);
    setWorkoutModalVisible(false);
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