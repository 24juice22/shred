import React, { useState } from 'react'

function TDEEForm({ setDailyData, setTdeeVisible, setModal, setTdeeModalVisible }) {
    const [tdeeInputs, setTdeeInputs] = useState({height: "", weight: "", age: ""});

    const date = new Date().toDateString('en-US');

    function handleChange(e) {
        const newValue = e.target.value.toUpperCase();
        setTdeeInputs(prevTdeeInputs => {
          return {
            ...prevTdeeInputs,
            [e.target.name]: newValue
          }
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const value = Math.floor(((10 * (tdeeInputs.weight / 2.20462)) + (6.25 * (tdeeInputs.height * 2.54)) - (5 * tdeeInputs.age)) * 1.2);
        setDailyData(prevData => {
            return {
              ...prevData,
              date: date,
              tdee: value,
              height: Number(e.target[0].value),
              weight: Number(e.target[1].value)
            }
          })
        setTdeeVisible(true);
        setTdeeInputs({height: "", weight: "", age: ""});
        setModal(false);
        setTdeeModalVisible(false);
    }

  return (
    <form className="modal__form container__wide" onSubmit={handleSubmit}>
        <div className="tdee__inputs">
            <input 
                type="text"
                placeholder="Height (in)"
                value={tdeeInputs.height}
                onChange={handleChange}
                name="height"
                required
                autoComplete='off'
                maxLength={2}
            />
            <input
                type="text"
                placeholder="Weight (lbs)"
                value={tdeeInputs.weight}
                onChange={handleChange}
                name="weight"
                required
                autoComplete='off'
                maxLength={3}
            />
            <input
                type="text"
                placeholder="Age"
                value={tdeeInputs.age}
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