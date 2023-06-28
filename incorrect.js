// incorrect version

import React,  useState  from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count++)
  }

  const handleDecrement = () => {
    if (count > 0)
      setCount(count - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onclick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    <div>
  )
}

export default Counter;
