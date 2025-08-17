# Playwright Setup Guide

## 1. Install Node.js
- Download and install Node.js (which includes npm) from [https://nodejs.org/](https://nodejs.org/).
- Verify installation:
  ```sh
  node --version
  npm --version
  ```

## 2. Install Playwright
- In your project directory, run:
  ```sh
  npm install -D @playwright/test
  npx playwright install
  ```

## 3. Verify Playwright Installation & Version
- To check if Playwright is installed and see the version:
  ```sh
  npx playwright --version
  ```
  - Example output: `Version 1.44.0`


## 4. Run Playwright Tests
- To run all tests:
  ```sh
  npx playwright test
  ```

## 5. Run in UI Mode (Visual Test Runner)
- To see and interact with tests in a UI:
  ```sh
  npx playwright test --ui
  ```

## 6. Run in Debug Mode (Step-by-Step)
- To debug and watch tests step by step:
  ```sh
  npx playwright test --debug
  ```

## 7. Open Playwright Test Report
- After running tests, view the report:
  ```sh
  npx playwright show-report
  ```

---
For more details, see the [Playwright docs](https://playwright.dev/).
