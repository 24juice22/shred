import React from 'react'

function ExitButton({ setVisibility }) {

  function handleExit() {
    setVisibility(false);
  }

  return (
    <button className="btn btn--outline btn--exit" onClick={handleExit}>X</button>
  )
}

export default ExitButton