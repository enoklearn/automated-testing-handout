import React, { useState, useRef } from 'react'
import { Container, StyledInput, SubmitButton } from './index.styles'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function AddTaskInput({addTask}) {
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  const addTaskAndClearInput = () => {
    addTask(input)
    setInput('')
    inputRef.current.focus()
  }

  return (
      <Container>
        <CheckBoxOutlineBlankIcon sx={{
          color: '#fff',
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem'
        }} />
        <StyledInput
          onChange={(e) => setInput(e.target.value)}
          value={input}
          ref={inputRef}
          placeholder="New task..."
        />
        {input && <SubmitButton 
          data-testid='add-task-button'
          onClick={() => addTaskAndClearInput(input)}
        >
          Add
        </SubmitButton>}
      </Container>
  );
}

export default AddTaskInput;