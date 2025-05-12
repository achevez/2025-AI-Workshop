export class Login {
  // Selectors
    elements = {
      loginEmailInput: () => cy.get('input[data-qa="login-email"]'),
      loginPasswordInput: () => cy.get('input[data-qa="login-password"]'),
      loginButton: () => cy.get('button[data-qa="login-button"]'),
      errorMessage: () => cy.get('.login-form p'),
      loggedInUsername: () => cy.get('a:contains(" Logged in as ")')
    }
  
    // Methods
      login(email, password) {
      this.elements.loginEmailInput().type(email);
      this.elements.loginPasswordInput().type(password);
      this.elements.loginButton().click();
    }
  
    verifyLogin() {
      this.elements.loggedInUsername().should('be.visible');
    }
  
    verifyLoginError() {
      this.elements.errorMessage().should('contain', 'Your email or password is incorrect!');
    }
  }
  
  export const LoginPage = new Login();
  