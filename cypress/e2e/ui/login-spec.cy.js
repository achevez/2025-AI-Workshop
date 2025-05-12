/// <reference types="cypress" />

import { LoginPage } from '../../page-objects/login';
import { HomePage } from '../../page-objects/home';

// Login Feature Tests
describe('Login Functionality', () => {

  beforeEach(() => {
    HomePage.visit();
  });

  // Smoke - Successful login
  it('@Smoke - Successful login with valid credentials', () => {
    HomePage.navigateToLogin();
    console.log("User email: ", Cypress.env('userEmail'));
    LoginPage.login(Cypress.env('userEmail'), Cypress.env('userPassword'));
    LoginPage.verifyLogin();
  });
});
