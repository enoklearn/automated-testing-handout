import todoFactory from '../factories/todo'

describe('Tasklist', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  it('should be able to create a single task when task title is entered and "Add" is clicked', () => {
    // Arrange
    const expectedTaskTitle = 'Buy oat milk'

    // Act
    cy.findByPlaceholderText('New task...').type(expectedTaskTitle)
    cy.findByText('Add').click()

    // Assert
    cy.get('input').should('have.value', expectedTaskTitle)
  })

  it('should be able to create multiple tasks when task title is entered and "Add" is clicked', () => {
    // Arrange
    const expectedTasks = todoFactory.buildList(5)

    // Act
    expectedTasks.forEach((todo) => {
      cy.findByPlaceholderText('New task...').type(todo)
      cy.findByText('Add').click()
    })

    // Assert
    cy.get('input').should('have.value', expectedTasks[0])
  })

  it('should be able to complete a single task when the checkbox is clicked', () => {
    // Arrange
    const expectedTasks = todoFactory.buildList(1)
    cy.findByPlaceholderText('New task...').type(expectedTasks[0])

    // Act
    cy.findByText('Add').click()
    cy.findByTestId('complete-task-button').click()

    // Assert
    cy.findByTestId(/task-not-complete-icon/i).should('not.exist')
    cy.findByTestId(/task-complete-icon/i).should('exist')
  })
})
