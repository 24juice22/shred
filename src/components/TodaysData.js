import React from 'react'
import Card from './Card'

function TodaysData({ tdeeVisible, tdee, dailyData }) {

    const todaysDataStyle = {
        visibility: tdeeVisible ? "visible" : "hidden",
    }

  return (
    <div className="tdee" style={todaysDataStyle}>
        <h3>Today's Snapshot</h3>
        <Card dailyData={dailyData}/>
    </div>
  )
}

export default TodaysData