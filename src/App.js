import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react";
import Brand from './components/Brand';
import Day from "./components/Day";
import AddMeal from "./components/AddMeal";
import AddWorkout from "./components/AddWorkout";
import AddMealModal from "./components/AddMealModal";
import AddWorkoutModal from "./components/AddWorkoutModal";
import ModalContainer from "./components/ModalContainer";
import './index.css';

function App() {
  const [modal, setModal] = useState(false);
  const [addMealModalVisible, setAddMealModalVisible] = useState(false);
  const [addWorkoutModalVisible, setAddWorkoutModalVisible] = useState(false);
  
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "unset";
  }, [modal]);

  return (
    <>
      <Brand />
      <Day />
      <AddMeal 
        setModal={setModal} 
        setAddMealModalVisible={setAddMealModalVisible}
      />
      <AddWorkout 
        setModal={setModal}
        setAddWorkoutModalVisible={setAddWorkoutModalVisible}
      />
      <ModalContainer 
        modal={modal} 
        setModal={setModal} 
        setAddMealModalVisible={setAddMealModalVisible}
        setAddWorkoutModalVisible={setAddWorkoutModalVisible}
      />
      <AddMealModal 
        addMealModalVisible={addMealModalVisible} 
        setAddMealModalVisible={setAddMealModalVisible}
        setModal={setModal}
      />
      <AddWorkoutModal 
        addWorkoutModalVisible={addWorkoutModalVisible} 
        setAddWorkoutModalVisible={setAddWorkoutModalVisible}
        setModal={setModal}
      />
    </>
  );
}

export default App;
