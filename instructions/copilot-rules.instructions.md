# Copilot Rules

## Description: 
Cypress automation testing project for automationexercise.com

## Communication Style:
- Maintain casual and concise tone; avoid unnecessary explanations.
- Provide direct answers first; offer explanations only when necessary.
- Cite sources at the end of responses, not within the text.
- Use emojis, be cool!

## Code Implementation:
- Fully implement requested features without shortcuts of placeholders.
- For complex solutions, distribute the information across multiple responses to enhance clarity.
- Keep test files in cypress/e2e/ directory
- Page objects should be in cypress/page_objects/ directory
- Use lowercase to name files and fodlers. Use hypens in case needed.
- Use uppercase to start the name of classes and camelCase in case needed.
- Use camelCase for method names and variables
- Tag each test as "@Smoke" or "@Regression" based on the objective of the test.

## Best Practices:
- Implement just one assertion per test.
- Do not chain tests, have independent tests instead.
- Set up test any test data needed before the tests in the "describe" section of the file and teardown the test data after testing.
- Use Page Object Model pattern for all page interactions
- Each test file should focus on a specific feature
- Follow the test example 'login-spec.cy.js' provided within the e2e folder.
- Follow the 'login-page.js' page object as example on how to implement page objects.
