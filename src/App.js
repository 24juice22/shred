import React, { useState, useEffect } from "react";
import Brand from './components/Brand';
import Day from "./components/Day";
import TDEEModal from "./components/TDEEModal";
import MealButton from "./components/MealButton";
import WorkoutButton from "./components/WorkoutButton";
import MealModal from "./components/MealModal";
import WorkoutModal from "./components/WorkoutModal";
import ModalContainer from "./components/ModalContainer";
import './index.css';
import TodaysData from "./components/TodaysData";
import Card from "./components/Card";

function App() {
  const [modal, setModal] = useState(false);
  const [tdeeModalVisible, setTdeeModalVisible] = useState(false);
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [tdeeVisible, setTdeeVisible] = useState(false);
  const [data, setData] = useState(null);
  const [dataVisible, setDataVisible] = useState(false);
  const [dailyData, setDailyData] = useState({date: "", height: 0, weight: 0, tdee: 0, mealCalories: 0, protein: 0, workoutCalories: 0 })

  const getData = async () => {
    try {
      const res = await fetch("https://sheet.best/api/sheets/491bac55-102a-431d-a4b8-23a91fbff86e")
      const data = await res.json();
      console.log(data);
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  function toggleData() {
    setDataVisible(prevValue => !prevValue);
  }

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "unset";
  }, [modal]);

  useEffect(() => {
    setTimeout(tdeeTimeout, 1000)
  }, [])

  function tdeeTimeout() {
    setTdeeModalVisible(true);
    setModal(true);
  }

  return (
    <div className="app">
      <Brand />
      <Day setDailyData={setDailyData} />
      <TodaysData
        tdeeVisible={tdeeVisible} 
        dailyData={dailyData}
      />
      <TDEEModal
        tdeeModalVisible={tdeeModalVisible} 
        setTdeeModalVisible={setTdeeModalVisible}
        setModal={setModal}
        setDailyData={setDailyData}
        setTdeeVisible={setTdeeVisible}
      />
      <MealButton 
        setModal={setModal} 
        setMealModalVisible={setMealModalVisible}
      />
      <WorkoutButton 
        setModal={setModal}
        setWorkoutModalVisible={setWorkoutModalVisible}
      />
      <ModalContainer 
        modal={modal} 
        setModal={setModal} 
        setTdeeModalVisible={setTdeeModalVisible}
        setMealModalVisible={setMealModalVisible}
        setWorkoutModalVisible={setWorkoutModalVisible}
      />
      <MealModal 
        mealModalVisible={mealModalVisible} 
        setMealModalVisible={setMealModalVisible}
        setModal={setModal}
        dailyData={dailyData}
        setDailyData={setDailyData}
      />
      <WorkoutModal 
        workoutModalVisible={workoutModalVisible} 
        setWorkoutModalVisible={setWorkoutModalVisible}
        setModal={setModal}
        dailyData={dailyData}
        setDailyData={setDailyData}
      />
      <button className="btn btn--outline btn--past" onClick={toggleData}>Show Past Days</button>
      {dataVisible && data.map(item => <Card dailyData={item}/>)}
    </div>
  );
}

export default App;
