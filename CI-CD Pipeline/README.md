# CI/CD Pipeline Automation with GitHub Actions

This project demonstrates a fully functional Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions, built around a simple Node.js application.

## 🚀 Features

* **Automated CI/CD Pipeline:** Configured GitHub Actions to automatically run workflows on every push or pull request.
* **Build & Test Automation:** On every commit, the pipeline installs dependencies, builds the project, and executes the unit testing suite to ensure code integrity.
* **Optimized Developer Workflow:** Reduces manual deployment effort and improves development efficiency.
* **Version Control Integration:** Seamlessly integrated with execution pipelines for robust software delivery.

## 🛠️ Technology Stack
* **Backend:** Node.js, Express
* **Testing:** Jest, Supertest
* **CI/CD:** GitHub Actions

## What's included?

- `index.js`: Standard Express API with endpoints to test.
- `index.test.js`: Comprehensive Jest tests for the API.
- `.github/workflows/ci.yml`: The GitHub Actions configuration that does the hard work.

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npm test
   ```
3. Start the server:
   ```bash
   npm start
   ```
