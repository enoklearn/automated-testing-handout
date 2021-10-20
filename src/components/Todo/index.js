import React from 'react'

const Todo = ({todo}) => {
    return (
        <div>{todo.id}. {todo.title}</div>
    )
}

export default Todo