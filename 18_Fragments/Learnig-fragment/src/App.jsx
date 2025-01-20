import { useState } from "react";
// import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/Foodinput";

function App() {
  // let textStateArr = useState();
  // let textToshow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToshow, setTextState] = useState("");

  let [FoodItem, setFoodItem] = useState([]);

  // this is the
  // let emptyMessage = FoodItem.length === 0 ? <h3>I am still Hungry </h3> : null

  // this is the if else condition are use in the conditional rendring
  // if (FoodItem.length ===0){
  //   return <h3>I am still hungry.</h3>
  // }

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...FoodItem, newFoodItem];
      setFoodItem(newItems);
    }
  };
  const onClick=()=>{
    
  }

  return (
    // <React.Fragment>
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        {/* {emptyMessage} */}
        
        <FoodInput handeKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={FoodItem}></ErrorMessage>

        <FoodItems items={FoodItem}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the list of helthi food list</p>
      </Container> */}
    </>
  );
}

export default App;
