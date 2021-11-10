import React from 'react'
import { Container, TaskTitleInput } from './index.styles'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Task = ({ task, toggleCompleteTask }) => {
  return (
    <Container isCompleted={task.isCompleted}>
      <div onClick={() => toggleCompleteTask(task)}>
          {task.isCompleted ? 
            <CheckBoxIcon sx={{color: '#03a9f4'}} /> : 
            <CheckBoxOutlineBlankIcon sx={{color: '#fff'}} />}
      </div>
      <TaskTitleInput isCompleted={task.isCompleted} value={task.title} readOnly />
    </Container>
  )
}

export default Task