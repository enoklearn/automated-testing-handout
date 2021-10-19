import React, {useState} from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([{id: 1, title: 'new todo'}, {id: 2, title: 'newest todo'}])
  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;
