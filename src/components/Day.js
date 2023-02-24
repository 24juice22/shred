import React from 'react'

function Day() {
    let date = new Date().toDateString('en-US');

  return (
    <p className="date">{date}</p>
  )
}

export default Day