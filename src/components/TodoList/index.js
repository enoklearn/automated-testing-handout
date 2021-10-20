import React from 'react'
import Todo from '../Todo/index'

import {PageContainer, TodosContainer, Container} from './index.styles'

const TodoList = ({todos, setTodos}) => {
    const findTodo = (id) => {
        return todos.find(todo => todo.id === id)
    }
    const removeTodo = (id) => {
        const todoIndex = todos.indexOf(findTodo(id))
        if (todoIndex > -1) {
            todos.splice(todoIndex, 1)
        }
        setTodos([...todos])
    }
    return (
        <PageContainer>
            <h1>TodoList</h1>
            <TodosContainer>
                {todos.map(todo => {
                    return (
                        <Container>
                            <Todo todo={todo} />
                            <button style={{marginLeft: '40px'}} onClick={() => removeTodo(todo.id)}>Complete</button>
                        </Container>
                    )})
                }
            </TodosContainer>
        </PageContainer>
    )
}

export default TodoList