// eslint-disable-next-line no-undef
describe('Career Search',
  () => {
    // eslint-disable-next-line no-undef
    it('Visits the Homepage!', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:8080/')
      // eslint-disable-next-line no-undef
      cy.get('.navbar').contains('Career Resources').click()
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/career')
      // eslint-disable-next-line no-undef
      cy.get('.form-control').type('Firefighter')
      // eslint-disable-next-line no-undef
      cy.contains('Firefighter').click()
    })
  })

// eslint-disable-next-line no-undef
describe('User Register',
  () => {
    // eslint-disable-next-line no-undef
    it('Visits the Homepage!', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:8080/')
      // eslint-disable-next-line no-undef
      cy.get('.btn').contains('Become a Mentee').click()
    })
  })
