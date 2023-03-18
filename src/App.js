import React, { useState, useEffect } from "react";
import Brand from './components/Brand';
import Day from "./components/Day";
import TDEEDisplay from "./components/TodaysData";
import TDEEModal from "./components/TDEEModal";
import MealButton from "./components/MealButton";
import WorkoutButton from "./components/WorkoutButton";
import MealModal from "./components/MealModal";
import WorkoutModal from "./components/WorkoutModal";
import ModalContainer from "./components/ModalContainer";
import './index.css';
import TodaysData from "./components/TodaysData";

function App() {
  const [modal, setModal] = useState(false);
  const [tdeeModalVisible, setTdeeModalVisible] = useState(false);
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [tdee, setTdee] = useState(null);
  const [tdeeVisible, setTdeeVisible] = useState(false);
  const [dailyData, setDailyData] = useState({mealCalories: 0, protein: 0, workoutCalories: 0})

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
    <>
      <Brand />
      <Day />
      <TodaysData
        tdeeVisible={tdeeVisible} 
        tdee={tdee}
        dailyData={dailyData}
      />
      <TDEEModal
        tdeeModalVisible={tdeeModalVisible} 
        setTdeeModalVisible={setTdeeModalVisible}
        setModal={setModal}
        setTdee={setTdee}
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
    </>
  );
}

export default App;
