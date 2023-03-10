import React from 'react'

function TDEEDisplay({ tDEEVisible, tDEE}) {

    const tdeeStyle = {
        visibility: tDEEVisible ? "visible" : "hidden",
    }

  return (
    <div className="tdee" style={tdeeStyle}>Your TDEE is {tDEE}</div>
  )
}

export default TDEEDisplay