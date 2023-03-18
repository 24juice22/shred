import React from 'react'
import ExitButton from './ExitButton'
import TDEEForm from './TDEEForm'
import ModalHeader from './ModalHeader'

function TDEEModal({ tdeeModalVisible, setTdeeModalVisible, setModal, setTdee, setTdeeVisible }) {

    const tdeeModalStyle = {
        visibility: tdeeModalVisible ? "visible" : "hidden",
        transform: tdeeModalVisible ? "scale(1)" : "scale(0.1)"
      }

  return (
    <div className="modal modal--small" style={tdeeModalStyle}>
        <ExitButton setVisibility={setTdeeModalVisible} setModal={setModal}/> 
        <ModalHeader title="TDEE Calculator" styling={"modal__title-primary"}/>   
        <TDEEForm setTdee={setTdee} setTdeeVisible={setTdeeVisible} setModal={setModal} setTdeeModalVisible={setTdeeModalVisible}/>
    </div>
  )
}

export default TDEEModal