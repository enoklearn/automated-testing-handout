import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;

  &:first-child {
    margin-top: 0.25rem;
  }
  
  &:last-child {
    margin-bottom: 0.15rem;
  }
`

export const TaskTitleInput = styled.input`
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: none;
  background: transparent;
  margin-bottom: 0.1rem;
  margin-left: 0.25rem;
  width: 100%;

  ${props => props.isCompleted && `
    opacity: 0.25;
  `}
`