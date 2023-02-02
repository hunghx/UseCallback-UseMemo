import React, { useCallback, useMemo, useState} from "react";
import Child1 from "./components/Child1";
let total;
let arr = 4
function App() {
  // const [count, setCount] = useState(0);

  // const handleIncrease = useCallback(()=>{
  //    console.log("render--cha");
  //    arr= arr+1;
  //   setCount((prevCount)=>prevCount+1)
  // },[])
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [list , setList] = useState([])
  
  const handleAdd= ()=>{
    setList((prev)=> [...prev,{name:name, price:price}]);
    handle();
  }
  
  const handle = useCallback(()=>{
    total = list.reduce( (total1, current)=>{
      console.log("tính toán lại");
      return total1+current.price
    },0)
  },[list])
  
  return (
    <div className="App">
      <input type={'text'} placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type={'text'} placeholder='price' onChange={(e)=>setPrice(+e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {
          list.map((curr, index)=>{
              return <tr key={index}>
                <td>{curr.name}</td>
                <td>{curr.price}</td>
              </tr>
          })
        }

        </tbody>

      </table>
      <h4>{total}</h4>
      {/* <h2>{count}</h2>
      <Child1 handleIncrease={handleIncrease}/> */}
    </div>
  );
}


export default App;