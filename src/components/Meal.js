import React from 'react'

function Meal({ meal, calories, protein}) {
    return (
        <div className="list">
            <p className="meal__text meal__text--meal">{meal}</p>
            <p className="meal__text meal__text--calories">{calories} Cal</p>
            <p className="meal__text meal__text--protein">{protein} g</p>
        </div>
    )
}

export default Meal