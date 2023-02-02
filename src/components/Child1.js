import React from 'react';
import { memo } from 'react';

function Child1(props) {
    console.log("render-con");
  return (
    <div>
        <h1>Đây là CHild 1</h1>
        <button onClick={props.handleIncrease}>Increase</button>
    </div>
  )
}
export default memo(Child1);
