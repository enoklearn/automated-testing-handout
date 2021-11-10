import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.75rem 1rem;
  border: none;
  width: 100%;
  background-color: rgb(255 255 255 / 15%);
  font-size: 1rem;
  color: white;
  padding-left: 2.38rem;

  &:focus {
    outline: 2px solid #03a9f4;
  }
`

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  position: absolute;
  border: none;
  right: 0.3rem;
  color: white;
  font-weight: bold;
  background-color: #03a9f4;
  top: 0.3rem;
  line-height: 1rem;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    transform: scale(0.95);
  }
`