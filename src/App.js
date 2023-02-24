import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react";
import Brand from './components/Brand';
import AddMeal from "./components/AddMeal";
import './index.css';
import AddMealModal from "./components/AddMealModal";

function App() {
  const [modal, setModal] = useState(false);
  const [addMealModalVisible, setAddMealModalVisible] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "unset";
  }, [modal]);

  return (
    <>
      <Brand />
      <AddMeal 
        setModal={setModal} 
        setAddMealModalVisible={setAddMealModalVisible}
      />
      <AddMealModal 
        addMealModalVisible={addMealModalVisible} 
        setAddModalVisible={setAddMealModalVisible}
        setModal={setModal}
      />
    </>
  );
}

export default App;
