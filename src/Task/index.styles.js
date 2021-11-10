import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:first-child {
    padding-top: 0.5rem;
  }
  
  &:last-child {
    padding-bottom: 0.4rem;
  }

  &:hover {
    background-color: rgb(31 31 32 / 50%);
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