import React from 'react'

function ModalHeader({ title, styling }) {
  return (
    <h2 className={`modal__title ${styling}`}>{title}</h2>
  )
}

export default ModalHeader