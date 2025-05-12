/**
 * API Utilities for Cypress tests
 * 
 * This module provides common functions for API testing
 */

/**
 * Makes an API request with proper authorization and base URL
 * 
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {object} options - Request options (body, headers, etc.)
 * @returns {Cypress.Chainable} - Cypress chain that yields response
 */
export const apiRequest = (method, endpoint, options = {}) => {
  const apiUrl = Cypress.env('apiUrl');
  const apiKey = Cypress.env('apiKey');
  
  // Ensure trailing slash is handled correctly
  const formattedEndpoint = endpoint.startsWith('/') 
    ? endpoint 
    : `/${endpoint}`;
  
  const url = `${apiUrl}${formattedEndpoint}`;
  
  // Merge default headers with provided headers
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    ...options.headers
  };
  
  return cy.request({
    method,
    url,
    ...options,
    headers,
    failOnStatusCode: options.failOnStatusCode !== undefined ? options.failOnStatusCode : false
  });
};

/**
 * Shorthand methods for common HTTP verbs
 */
export const api = {
  get: (endpoint, options) => apiRequest('GET', endpoint, options),
  post: (endpoint, body, options = {}) => apiRequest('POST', endpoint, { ...options, body }),
  put: (endpoint, body, options = {}) => apiRequest('PUT', endpoint, { ...options, body }),
  delete: (endpoint, options) => apiRequest('DELETE', endpoint, options)
};
