import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './components/Errormessage'

import Itemlist from './components/ItemList'

function App() {
  let FoodItem = ["dal","sabji","roti","raita","paneer"];
  // let FoodItem = [];
return <>
<h1>hELLO HEltHyFood Lover </h1>
  
   <ErrorMessage foodItem={FoodItem}></ErrorMessage>
  <Itemlist foodItem1={FoodItem}/>
  
  </>

}

export default App
