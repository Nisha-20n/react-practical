import CounterApplication from './components/CounterApplication.jsx'
import ContextDemo from './components/ContextDemo.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>React Practical Class</h1>

      <div className="section">
        <h2>1. Counter Application</h2>
        <CounterApplication />
      </div>

      <div className="section">
        <h2>2. Context API Demo</h2>
        <ContextDemo />
      </div>
    </div>
  )
}

export default App