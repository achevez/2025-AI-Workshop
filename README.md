# Cypress Automation Testing Project

This is a dummy project that contains automated tests for web applications using Cypress. It includes UI tests, and various supporting configurations.

The main goal of this project is to provide a structured approach to adopt the use of AI tools like GitHub Copilot in the development process, while also maintaining a clean and organized codebase.

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm (v8 or later recommended)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/achevez/2025-AI-Workshop
   cd AI Practice
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your specific configuration values.

### Running Tests

#### E2E Tests

```bash
npm run cypress:run
```

This will run all tests in headless mode. 

Optionally, you can run tests in the interactive mode using:

```bash
npx cypress open
```

## Test Development Guidelines

### Page Object Pattern

This project uses the Page Object Pattern to maintain separation between test logic and page interactions. 
Page objects are located in the `cypress/page-objects/` directory.

### Writing New Tests

1. For UI tests, create a new spec file in `cypress/e2e/ui`
2. For API tests, create a new spec file in `cypress/e2e/api/`
3. Create corresponding page objects if needed
4. Add test data to the `cypress/fixtures/` directory

### Best Practices

- Keep tests independent of each other
- Use descriptive test and function names
- Use tags like `@Smoke`, `@Regression` for test categorization

## Environment Variables

This project uses environment variables for configuration. To set up:

1. Copy `.env.example` to `.env` 
2. Edit the `.env` file with your specific values
3. Variables will be loaded automatically when running Cypress

You can access environment variables in tests using `Cypress.env()`:

```javascript
// Example: Using environment variables in tests
cy.request({
  url: Cypress.env('apiUrl') + '/endpoint',
  headers: { 'Authorization': `Bearer ${Cypress.env('apiKey')}` }
});
```

## Documentation

Additional documentation is available in the `instructions/` directory:

- `copilot-rules.instructions.md`: Guidelines for using GitHub Copilot
- `folder-structure.instructions.md`: Details about the project structure
- `prd.instructions.md`: Product requirements
- `user-flows.instructions.md`: User flow descriptions

Prompt files are also included in the `prompts/` directory for reference.

- `update-folder-structure.prompts.md`: prompt for updating folder structure.
