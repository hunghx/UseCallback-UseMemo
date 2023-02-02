import React from 'react'
import { useState } from 'react';
export default function Form(props) {
const [newWork, setNewWork] = useState("");
    const handleChange = (e)=>{
        setNewWork(e.target.value)
    }
  return (

    <form className="form-inline">
    <div className="form-group">
      <label htmlFor="" />
      <input
        type="text"
        name=""
        id=""
        className="form-control"
        placeholder=""
        aria-describedby="helpId"
        onChange={handleChange}
      />
      <button className="btn btn-info mx-3" onClick={(e)=>{
        e.preventDefault();
        props.handleAdd(newWork)
      }}>add</button>
    </div>
  </form>
    
  )
}
