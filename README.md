# Playwright Setup Guide

## 1. Clone the Repository

1. Go to the GitHub page: [https://github.com/nadimshah1996/nadim-hudl-e2e-tests](https://github.com/nadimshah1996/nadim-hudl-e2e-tests)
2. Click the green **Code** button and copy the repository link (choose SSH or HTTPS).
3. Open a terminal:
   - On Windows, you can clone into your `C:` drive (e.g., `C:\Projects`):
     ```
     cd C:\Projects
     git clone <repo-link>
     cd nadim-hudl-e2e-tests
     ```
   - On Ubuntu, clone into your preferred directory:
     ```
     cd ~/projects
     git clone <repo-link>
     cd nadim-hudl-e2e-tests
     ```
4. Open the folder in VS Code:
   ```
   code .
   ```

## 2. Install Node.js

- Download and install Node.js (which includes npm) from [https://nodejs.org/](https://nodejs.org/).
- Verify installation:
  ```
  node --version
  npm --version
  ```

## 3. Install Playwright

- In your project directory, run:
  ```
  npm install -D @playwright/test
  npx playwright install
  ```

## 4. Verify Playwright Installation & Version

- To check if Playwright is installed and see the version:
  ```
  npx playwright --version
  ```
  - Example output: `Version 1.44.0`

## 5. Run Playwright Tests

- To run all tests:
  ```
  npx playwright test
  ```

## 6. Run in UI Mode (Visual Test Runner)

- To see and interact with tests in a UI:
  ```
  npx playwright test --ui
  ```

## 7. Run in Debug Mode (Step-by-Step)

- To debug and watch tests step by step:
  ```
  npx playwright test --debug
  ```

## 8. Open Playwright Test Report

- After running tests, view the report:
  ```
  npx playwright show-report
  ```