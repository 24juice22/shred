import React, { useState } from 'react'

function TDEEForm({ setTDEE, setTDEEVisible, setModal, setTDEEModalVisible }) {

    const [tDEEInputs, setTDEEInputs] = useState({height: "", weight: "", age: ""});

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        setTDEEInputs(prevTDEEInputs => {
          return {
            ...prevTDEEInputs,
            [e.target.name]: newValue
          }
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const value = Math.floor(((10 * (tDEEInputs.weight / 2.20462)) + (6.25 * (tDEEInputs.height * 2.54)) - (5 * tDEEInputs.age)) * 1.2);
        setTDEE(value);
        setTDEEVisible(true);
        setTDEEInputs({height: "", weight: "", age: ""});
        setModal(false);
        setTDEEModalVisible(false);
    }

  return (
    <form className="modal__form container__wide" onSubmit={handleSubmit}>
        <div className="tdee__inputs">
            <input 
                type="text"
                placeholder="Height (in)"
                value={tDEEInputs.height}
                onChange={handleChange}
                name="height"
                required
                autoComplete='off'
                maxLength={2}
            />
            <input
                type="text"
                placeholder="Weight (lbs)"
                value={tDEEInputs.weight}
                onChange={handleChange}
                name="weight"
                required
                autoComplete='off'
                maxLength={3}
            />
            <input
                type="text"
                placeholder="Age"
                value={tDEEInputs.age}
                onChange={handleChange}
                name="age"
                required
                autoComplete='off'
                maxLength={3}
            />
        </div>
        <button className="btn modal__btn">Submit</button>
    </form>
  )
}

export default TDEEForm