import React from 'react'
import "./todo.css"

const Todo= ({todo,ondelete}) => {
  
    return (
    <div className='todolists'>
      <h4>{todo.sno}</h4>
     <h1 className='htodo'>{todo.title}</h1>
     <h1>{todo.desc}</h1>
     <button className="btn btn-danger" onClick={()=>{ondelete(todo)}} >delete</button>
    </div>
    // if we pass the parameter inside ondelete func it gets rendered automatically without even calling it 
    // inorder to overcome this we will make use of arrow function
    // ()=>{
      // ondelete(todo)}
    // }
  )
}
// i can pass the props in 2 ways 
// 1.props as parameter 
// then props.todo.content
// 2.by destructuring 
// i.e by directly passing the props data 
// in this case it is {todo getting passed from todos .js 
// the actual data is getting passed from app.js can consider as a grandpa of todo.js


export default Todo
