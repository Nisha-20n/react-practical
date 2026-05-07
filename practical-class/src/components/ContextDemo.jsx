import { createContext, useContext } from 'react'

// Step 1: Create the Context
const UserContext = createContext()

// Parent component that provides the context
function ContextDemo() {
  // Data that will be shared through context
  const userData = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    role: 'Developer'
  }

  return (
    <div className="context-demo">
      <h3>Context API Demonstration</h3>
      <p>This shows how data flows from parent to nested child components using Context.</p>

      {/* Step 2: Provide the context to child components */}
      <UserContext.Provider value={userData}>
        <ParentComponent />
      </UserContext.Provider>
    </div>
  )
}

// Parent component (intermediate level)
function ParentComponent() {
  return (
    <div className="parent-component">
      <h4>Parent Component</h4>
      <p>This component doesn't directly use the context, but passes it down.</p>
      <ChildComponent />
    </div>
  )
}

// Child component that consumes the context
function ChildComponent() {
  // Step 3: Consume the context using useContext hook
  const user = useContext(UserContext)

  return (
    <div className="child-component">
      <h4>Child Component (Consuming Context)</h4>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <p>This data came from the ContextDemo component through the Context API!</p>
    </div>
  )
}

export default ContextDemo