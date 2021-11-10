import todoFactory from '../factories/todo'

describe('example to-do app', () => {
  let todos

  beforeEach(() => {
    todos = todoFactory.buildList(5)

    cy.visit('localhost:3000/')
  })

  it('creates multiple todos', () => {
    // Act
    todos.forEach((todo) => {
      cy.findByPlaceholderText('New task...').type(todo)
      cy.findByTestId('add-task-button').click()
    })

    // Assert
    cy.findByText(todos[0]).should('be.visible')
    cy.findByText(todos[4]).should('be.visible')
  })

  it('creates and completes a todo', () => {
    // Arrange
    cy.findByPlaceholderText('New task...').type(todos[0])

    // Act
    cy.findByText('Submit').click()
    cy.findByText('Complete').click()

    // Assert
    cy.findByText(todos[0]).should('not.exist')
  })
})
