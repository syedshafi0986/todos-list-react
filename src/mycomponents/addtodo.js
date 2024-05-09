import React from 'react'
import  { useState } from 'react';

const Addtodo = (props) => {
    const [title ,setTitle]=useState("")
    const [desc ,setDesc]=useState("")

    const submit=(e)=>{
        e.preventDefault()
        // page doesnot gets reload by it
        if(!title || !desc){
            alert("cant be null")
        }
        else{
        props.addtodo(title,desc)
        setTitle("")
        setDesc("")
        }

    }
  return (
    <div className='container my-5'>
        <h3>add a todo</h3>
      <form onSubmit={submit}>
      <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label> 
    <input type="text" className="form-control" value ={title} onChange={(e)=>setTitle(e.target.value)} id="title"/>
    {/* here whats so ever value is entered it gets stored in title  */}
    </div>
  
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">todos description</label>
    <input type="text" className="form-control" value = {desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
  </div>

  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}

export default Addtodo
