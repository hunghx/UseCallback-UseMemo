import React from 'react'

export default function List(props) {
    console.log(props.list);
  return (
    <ul className='my-4'>
    {
        props.list.map((curent,index)=>{
            return <li key={index}>{curent}<button className='btn btn-danger' onClick={()=>{
                props.handleDelete(index)
            }}>D</button></li>
        })
    }       
    </ul>
  )
}
