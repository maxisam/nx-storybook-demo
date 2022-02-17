describe('shared-component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=somethingcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-test-something').should('exist');
  });
});