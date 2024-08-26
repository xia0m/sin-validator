## Getting Started

1. Install Node.js

- Ensure that Node.js is installed on your machine. You can verify the installation by running:

  ```bash
  node -v
  ```

- If Node.js is not installed, follow the instructions on the [Node.js](https://nodejs.org/en) website to download and install the latest version.

2. Run the development server

   ```bash
   npx next dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Live Demo

   Visit [SIN Validator](https://xia0m.github.io/sin-validator/) for a Live Demo.

## Run Test Locally

```bash
npm test
```

## Assumption

1. Input Format
   - The Social Insurance Number (SIN) will be formated as XXX XXX XXX and only digits are accepted
   - SIN consists of exactly 9 digits
2. Validation
   - The validation follows the Luhn Algorithm
   - Only frontend validation is provided, there is no backend involved

## Approach and Logic

1. Project Setup
   - Create a Next.js app with Typescript, Tailwind CSS, Daisy UI for styling
2. UI Design
   - Added a Card that contains text input and 'Validation' Button
   - Enhanced the input field to automatically format the input as XXX XXX XXX, ensuring that only numeric input is accepted.
3. Asynchronous Validation

   - Implemented logic to validate the SIN input upon clicking the 'Validate' button, including a length check and Luhn Algorithm verification.
   - Refactored the validation logic into a promise, allowing the UI to reflect 'Success', 'Error', and 'Pending' states based on the validation result.

4. User Feedback with Icons
   - If isValidating is true, the loading spinner (LoadingIcon) is shown.
   - If isValid is true, the success icon (SuccessIcon) is displayed along with the success message.
   - If isValid is false, the error icon (ErrorIcon) is displayed along with the error message.
5. Unit Testing
   - Added Vitest unit tests to ensure the reliability of the validation logic and UI components.
6. CI/CD
   - Configured GitHub Actions to automatically run tests and deploy the application to GitHub Pages.
