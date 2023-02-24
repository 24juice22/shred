import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react";
import Brand from './components/Brand';
import AddMeal from "./components/AddMeal";
import './index.css';
import AddMealModal from "./components/AddMealModal";

function App() {
  const [addMealModalVisible, setAddMealModalVisible] = useState(false)

  return (
    <>
      <Brand />
      <AddMeal setAddMealModalVisible={setAddMealModalVisible}/>
      <AddMealModal addMealModalVisible={addMealModalVisible}/>
      <h1>asdasd</h1>
      
    </>
  );
}

export default App;
