dotenv.config();

# How to Setup Playwright Test for Hudl

Follow these steps to get the repo, set up your environment, and run Playwright tests for Hudl.

## 1. Clone the Repository

Open your terminal and run:

```
git clone git@github.com:nadimshah1996/nadim-hudl-e2e-tests.git
```

You can clone into any directory, e.g., `C:\Projects` on Windows or `~/projects` on Ubuntu.

## 2. Open the Project in VS Code

Navigate into the project folder and open VS Code:

```
cd nadim-hudl-e2e-tests
code .
```

## 3. Environment Variable Setup for Playwright Tests

To run these tests, you must create a `.env` file in the project root with your Hudl credentials. This is required for authentication and to avoid issues with Windows environment variables.

### Create a `.env` file in the project root

Add the following lines to your `.env` file (replace with your actual credentials):

```
HUDL_USERNAME=your-email@example.com
HUDL_PASSWORD=your-password
```

> **Important:**
>
> - Do NOT use `USERNAME` or `PASSWORD` as variable names, as these are reserved by Windows and may be overridden.
> - Always use `HUDL_USERNAME` and `HUDL_PASSWORD`.

### How the credentials are loaded

The test code uses the `dotenv` package to load these variables. In `src/setup/credentials.ts`:

```ts
import dotenv from "dotenv";
dotenv.config();

export const Credentials = {
  username: process.env.HUDL_USERNAME || "",
  password: process.env.HUDL_PASSWORD || "",
};
```

### Example `.env` file

```
HUDL_USERNAME=yourusername
HUDL_PASSWORD=anypassword
```

### Troubleshooting

- If the test prints `DEBUG: Username from .env: Nadim`, you are still using the reserved `USERNAME` variable. Change your `.env` and code to use `HUDL_USERNAME` instead.
- Never commit your `.env` file to version control.

---

For any issues, check the console output for error messages and ensure your `.env` file is correctly formatted and in the project root.

## 4. Install Node.js (if you don't have it)

Check if Node.js is installed:

```
node --version
```

If you don't see a version (e.g., v18.x.x or higher), download and install Node.js from [nodejs.org](https://nodejs.org/).

## 5. Install Playwright (if you don't have it)

Check if Playwright is installed:

```
npx playwright --version
```

If not installed, run:

```
npm install
npx playwright install
```

## 6. Run the Tests

You can run the tests in three ways:

1. **Standard run:**

```
npx playwright test
```

2. **UI mode:**

```
npx playwright test --ui
```

3. **Debug mode:**

```
npx playwright test --debug
```
