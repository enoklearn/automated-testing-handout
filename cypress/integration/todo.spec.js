/// <reference types="cypress" />
import todoFactory from '../factories/todo'

describe('example to-do app', () => {
  let todos

  beforeEach(() => {
    todos = todoFactory.buildList(5)

    cy.visit('localhost:3000/')
  })

  it('creates multiple todos', () => {
    todos.forEach((todo) => {
      cy.findByPlaceholderText('Create a todo').type(todo)
      cy.findByTestId('submit-todo').click()
    })
    cy.findByText(todos[0]).should('be.visible')
    cy.findByText(todos[4]).should('be.visible')
  })

  it('creates and completes a todo', () => {
    cy.findByPlaceholderText('Create a todo').type(todos[0])
    cy.findByText('Submit').click()
    cy.findByText('Complete').click()
    cy.findByText(todos[0]).should('not.exist')
  })
})
