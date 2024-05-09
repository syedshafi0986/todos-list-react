import React from 'react'
import Todo from "./todoitem"

export function Todos(props) {
  return (
    <div>
      <h1 className='text-center'>todos list</h1>
      {props.todot.length===0 ? "no todos left" :
      props.todot.map((todo)=>{
        return <Todo todo={todo} key={todo.sno}ondelete={props.ondelete}/>
      })
    }
      {/* here key represents a unique key for every child ex:a mole of achild */}
      {/* remember not to use todo={rpops.todot}coz we are appluying map over props.todot initially so no need of that instead make use of parameter declared in map fnc */}
      
      {/* make sure to wrap the functions and variables inside the brackets{} if we are inside the return  */}
   
    </div>
  )
}
