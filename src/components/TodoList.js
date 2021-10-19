import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
    const findTodo = (id) => {
        return todos.find(todo => todo.id === id)
    }
    const removeTodo = (id) => {
        const todoIndex = todos.indexOf(findTodo(id))
        if (todoIndex > -1) {
            todos.splice(todoIndex, 1)
        }
        console.log({todos})
        setTodos([...todos])
    }
    return (
        <div>
            {console.log(todos)}
            TodoList
            {todos.map(todo => {
                return <div><Todo todo={todo} /><button onClick={() => removeTodo(todo.id)}>Complete</button></div>
                })
            }
        </div>
    )
}

export default TodoList