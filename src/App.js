import React, {useState} from 'react'
import TodoList from './TodoList/index'
import {StyledInput, SubmitButton} from './global-styles'

function App() {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([currentTodo, ...todos])
    setCurrentTodo('')
}

  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledInput style={{marginRight: '10px'}} onChange={(e) => setCurrentTodo(e.target.value)} value={currentTodo} placeholder="Create a todo" />
          <SubmitButton data-testid='submit-todo' type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default App;
