/// <reference types="cypress" />
import { api } from '../../support/api-utils';

describe('API Tests', () => {

  beforeEach(() => {
    // Log which API URL we're using
    cy.log(`Using API URL: ${Cypress.env('apiUrl')}`);
  });

  context("GET /BookStore/v1/Books", () => {
    it("gets a list of books", () => {
      api.get('/BookStore/v1/Books').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.books).length.to.be.greaterThan(1);
      });
    });
  });
});

