import React from 'react'
import Task from '../Task'
import { Container } from './index.styles'

const TodoList = ({ tasks, toggleCompleteTask }) => {
  if (tasks.length === 0) {
    return null
  }

  return (
    <Container>
      {tasks.map(task => <Task key={task.id} task={task} toggleCompleteTask={toggleCompleteTask} />)}
    </Container>
  )
}

export default TodoList