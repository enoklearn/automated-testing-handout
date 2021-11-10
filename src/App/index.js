import React, { useState } from 'react'
import TaskList from '../TaskList'
import AddTaskInput from '../AddTaskInput'
import { AppContainer, Title } from './index.styles'
import { v4 as generateUuid } from 'uuid'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function App() {
  const [tasks, setTasks] = useState([])

  const toggleCompleteTask = (taskToComplete) => {
    const taskToCompleteIndex = tasks.findIndex(task => task.id === taskToComplete.id)
    const updatedTasks = [...tasks]
    updatedTasks[taskToCompleteIndex].isCompleted = !updatedTasks[taskToCompleteIndex].isCompleted
    setTasks(updatedTasks)
  }

  const addTask = (taskToAdd) => {
    const updatedTasks = [...tasks, { title: taskToAdd, id: generateUuid(), isCompleted: false }]
    setTasks(updatedTasks)
  }

  return (
    <AppContainer>
      <Title><WbSunnyIcon sx={{ color: '#ffc107', marginRight: '0.5rem' }} /> Today</Title>
      <TaskList tasks={tasks} toggleCompleteTask={toggleCompleteTask} />
      <AddTaskInput addTask={addTask} />
    </AppContainer>
  );
}

export default App;
