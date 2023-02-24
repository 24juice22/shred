import React from 'react'

function ExitButton({ setVisibility, setModal }) {

  function handleExit() {
    setVisibility(false);
    setModal(false);
  }

  return (
    <button className="btn btn--outline btn--exit" onClick={handleExit}>X</button>
  )
}

export default ExitButton