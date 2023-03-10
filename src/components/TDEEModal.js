import React from 'react'
import ExitButton from './ExitButton'
import TDEEForm from './TDEEForm'

function TDEEModal({ TDEEModalVisible, setTDEEModalVisible, setModal, setTDEE, setTDEEVisible }) {

    const TDEEModalStyle = {
        visibility: TDEEModalVisible ? "visible" : "hidden",
        transform: TDEEModalVisible ? "scale(1)" : "scale(0.1)"
      }

  return (
    <div className="modal modal--small" style={TDEEModalStyle}>
        <ExitButton setVisibility={setTDEEModalVisible} setModal={setModal}/>    
        <h2 className="modal__title modal__title-primary">TDEE Calculator</h2>
        <TDEEForm setTDEE={setTDEE} setTDEEVisible={setTDEEVisible} setModal={setModal} setTDEEModalVisible={setTDEEModalVisible}/>
    </div>
  )
}

export default TDEEModal