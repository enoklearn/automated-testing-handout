import React from 'react'
import {PageContainer, TodosContainer, Container} from './index.styles'

const TodoList = ({todos, setTodos}) => {
    const removeTodo = (todo) => {
        const newTodos = todos.filter(string => string !== todo)
        setTodos(newTodos)
    }
    
    return (
        <PageContainer>
            <h1>TodoList</h1>
            <TodosContainer>
                {todos.map(todo => {
                    return (
                        <Container>
                            <p>{todo}</p>
                            <button 
                                style={{
                                    marginLeft: '40px', 
                                    borderRadius: '5px', 
                                    border: '1px solid grey'
                                    }} 
                                onClick={() => removeTodo(todo)}
                            >
                                Complete
                            </button>
                        </Container>
                    )})
                }
            </TodosContainer>
        </PageContainer>
    )
}

export default TodoList