import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [work, abcxyzdfbhdsfbhds]= useState(["đi học","đi chơi", "Tuấn Anh đi học muộn"]);
  const handleDelete = (id)=>{
    let listWork = work.filter((curent,index)=> index!==id);

    abcxyzdfbhdsfbhds(listWork)
  }
  const handleAdd = (data)=>{
    abcxyzdfbhdsfbhds(work => [...work,data])
  }
  return (
    <div className="App">
      <Form handleAdd={handleAdd}/>
      <List handleDelete={handleDelete} list={work}/>
    </div>
  );
}

export default App;
