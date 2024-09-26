import React from 'react'
import { useCounter } from '../hooks/useCounter'

const Counter2 = () => {

    const [count, handleCount] = useCounter(0);



  return (
    <div>
      <button onClick={handleCount}>Click me {count}</button>
    </div>
  )
}

export default Counter2
