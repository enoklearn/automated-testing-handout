import React, {useState} from 'react'
import TodoList from './components/TodoList/index'
import AddTodo from './components/AddTodo/index'

function App() {
  const [todos, setTodos] = useState([{id: 1, title: 'reaaaaaaaaalllllllllllllllllyyyyyyyyyyyyy longggggggggggg todo'}, {id: 2, title: 'newest todo'}])
  const [currentTodo, setCurrentTodo] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({todos})
    console.log({currentTodo})
    setTodos([todoObjectFactory, ...todos])
}

  const todoObjectFactory = {
    id: 5,
    title: currentTodo
  }
  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
      <div>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input onChange={(e) => setCurrentTodo(e.target.value)} value={currentTodo} />
              <input type='submit' value='submit'/>
          </form>
          {currentTodo}
        </div>
    </div>
  );
}

export default App;
