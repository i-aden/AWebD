// https://docs.cypress.io/api/introduction/api.html

describe('Google is reachable', () => {
  it('Visits the app root url', () => {
    cy.visit('https://google.com')
    cy.get('input').should('exist')
  })
})
