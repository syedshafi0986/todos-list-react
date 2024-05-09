// import logo from './logo.svg';
// import './App.css';
import Header from "./mycomponents/header"

import {Todos} from './mycomponents/todos';
import Footer from './mycomponents/footer';
import React, { useEffect, useState } from 'react';
import About from "./mycomponents/about";
import Addtodo from "./mycomponents/addtodo";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"


function App() {
  let init;
if (localStorage.getItem("todo") === null) {
  init = [];
} else {
  init = JSON.parse(localStorage.getItem("todo"));
}

// console.log(init);

  const [todos, settodo] = useState(init)
  //we see that when we reload only some of the data remained persistent while reloading the other data vanishes out 
  // inorder to overcome this we have use effect
  useEffect(()=>{
    localStorage.setItem("todo",JSON.stringify(todos))
  },[todos])
   const ondelete= (tods)=>{
    // we cant delete an item in such way while we are dealing with array of objects
    // let index=todos.indexOf(tods)
    // todos.splice(index,1)
    const delEle=todos.filter((e)=>{
      
      return e!==tods
    })
    console.log(tods.sno)
    console.log(delEle)
    settodo(delEle)
    // localStorage.getItem("todo")
    // heres how usestate works 
    // it takes two aurguments :the element and the function to run on tht element in order to manage the state of the application accordingly
    // in this example todos is the set of element in which we want to manage its state 
    // the function settodo runs on each todos component 
    // the settodo function work is to update state of application here we want to delete the element from the web page 
    // inorder to delete it we make use of filter function where in it creates a new array which have the elements other than deleted one (if i clicked 1 then other than 1 i.e 2 and 3 will b stored in a newly created array)
    // now that newly created array is passed in settodo function in order to update the application now the array has only 2 elements hence only two elements are shown


  }
  const addtodo=(title,desc)=>{
    console.log("am adding todo",title,desc)
    let sno= todos.length>0 ?todos[todos.length-1].sno+1:1 ;   
    const mytodo={
      sno:sno,
      title:title,
      desc:desc
    }
    console.log(mytodo)
    settodo([...todos,mytodo])
    //  settodo([...todos, mytodo]), it looks like you're using the spread operator (...) to create a new array containing all the elements of the existing todos array plus a new element mytodo. This is a common pattern in React for updating state in a way that preserves the immutability of the original state.
    console.log(todos)
   
  }
  return (
    <>
    <Router >
      <Header title={"Todos List "} searchBAr={true}/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todot={todos} ondelete={ondelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
        {/* consider todos as a parent class or as acontainer in css */}
        
        </Router>
         </>
     
     
       )
     }
     
     
     export default App;

        
        
        
     
     
   
          
          
        

        
        
  
   
