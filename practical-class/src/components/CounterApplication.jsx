import { useState } from 'react'

function CounterApplication() {
  
  const [count, setCount] = useState(0)

  
  const increment = () => {
    setCount(count + 1)
  }

  
  const decrement = () => {
    setCount(count - 1)
  }

  
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="counter-app">
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterApplication