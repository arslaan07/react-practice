import React, { useState } from 'react'

export default function App2() { // useState retunr karta hai array jisme do elements hote hai 1. object 2. func
    const [count, setCount] = useState(0);
    console.log(count);
    console.log(setCount);
    const plusClick = () => {
        setCount(count+1);
    }
    const minusClick = () => {
        setCount(count-1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusClick}>+</button>
      <button onClick={minusClick}>-</button>
    </div>
  )
}
