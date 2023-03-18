import React, { useState, useEffect } from "react";
import Brand from './components/Brand';
import Day from "./components/Day";
import TDEEDisplay from "./components/TDEEDisplay";
import TDEEModal from "./components/TDEEModal";
import MealButton from "./components/MealButton";
import WorkoutButton from "./components/WorkoutButton";
import MealModal from "./components/MealModal";
import WorkoutModal from "./components/WorkoutModal";
import ModalContainer from "./components/ModalContainer";
import './index.css';

function App() {
  const [modal, setModal] = useState(false);
  const [TDEEModalVisible, setTDEEModalVisible] = useState(false);
  const [mealModalVisible, setMealModalVisible] = useState(false);
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [tDEE, setTDEE] = useState(null);
  const [tDEEVisible, setTDEEVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "unset";
  }, [modal]);

  useEffect(() => {
    setTimeout(TDEETimeout, 1000)
  }, [])

  function TDEETimeout() {
    setTDEEModalVisible(true);
    setModal(true);
  }

  return (
    <>
      <Brand />
      <Day />
      <TDEEDisplay tDEEVisible={tDEEVisible} tDEE={tDEE}/>
      <TDEEModal
        TDEEModalVisible={TDEEModalVisible} 
        setTDEEModalVisible={setTDEEModalVisible}
        setModal={setModal}
        setTDEE={setTDEE}
        setTDEEVisible={setTDEEVisible}
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
        setTDEEModalVisible={setTDEEModalVisible}
        setMealModalVisible={setMealModalVisible}
        setWorkoutModalVisible={setWorkoutModalVisible}
      />
      <MealModal 
        mealModalVisible={mealModalVisible} 
        setMealModalVisible={setMealModalVisible}
        setModal={setModal}
      />
      <WorkoutModal 
        workoutModalVisible={workoutModalVisible} 
        setWorkoutModalVisible={setWorkoutModalVisible}
        setModal={setModal}
      />
    </>
  );
}

export default App;
