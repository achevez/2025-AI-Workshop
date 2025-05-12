export class Home {
  // Selectors
  elements = {
    signupLoginLink: () => cy.get('a[href="/login"]')
  }

  // Methods
  visit() {
    cy.visit('/');
  }

  navigateToLogin() {
    this.elements.signupLoginLink().click();
  }
}

export const HomePage = new Home();
