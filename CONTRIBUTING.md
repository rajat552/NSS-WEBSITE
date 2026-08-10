# Contributing to NSS NIT Hamirpur Website

Thank you for taking the time to contribute! This project is built by volunteers to serve the community, and we appreciate your help in making it better.

To ensure a smooth collaboration, please follow the guidelines below.

---

## 🗺️ How to Contribute

### 1. Find or Report an Issue
- Before starting any coding, check the [Issues Page](https://github.com/rajat552/NSS-WEBSITE/issues) to see if the work has already been proposed or is in progress.
- If you find a bug or want to propose a new feature, please **create a new issue** using the templates provided.
- If you'd like to work on an existing issue, comment on it asking to be assigned. Do not begin work without prior confirmation to avoid double effort.

### 2. Branch Naming Conventions
When working on your feature/bugfix, create a branch off the `main` (or `develop`, as specified) branch. Please use the following namgiting convention:
- **Features**: `feat/issue-number-short-description` (e.g., `feat/12-blood-request-validation`)
- **Bugfixes**: `fix/issue-number-short-description` (e.g., `fix/4-theme-toggle-blink`)
- **Documentation**: `docs/short-description` (e.g., `docs/update-installation-instructions`)
- **Refactoring**: `refactor/short-description` (e.g., `refactor/api-axios-interceptors`)

### 3. Setup and Coding Guidelines
- Run `npm run install-all` at the root directory to ensure dependencies are installed via npm workspaces.
- Always create a `.env` file in the frontend and backend using the `.env.example` templates.
- **Do not commit credentials or local configuration files (`.env`, `node_modules/`, etc.)**. The root `.gitignore` will prevent this by default.
- Follow Javascript / React best practices:
  - Write clean, modular, and reusable components.
  - Keep state management structured.
  - Use Tailwind CSS v4 styling tokens defined in `frontend/src/index.css`.
  - Maintain the existing routing, error handling, and loading states.
- Run `npm run lint` inside the frontend to verify there are no ESLint issues:
  ```bash
  cd frontend
  npm run lint
  ```

### 4. Commit Message Formats
We recommend using **Conventional Commits** for clean git history:
- `feat: add blood request validation schema`
- `fix: correct layout alignment on mobile devices`
- `docs: add contributing guidelines and issue templates`
- `chore: update root package dependencies`
- `refactor: clean up userController middleware validations`

### 5. Submitting a Pull Request
When you're ready to submit your code:
1. Ensure your local branch is updated with the latest remote code (`git pull origin main`).
2. Run your code locally to ensure it compiles, routes load, and there are no lint issues.
3. Open a Pull Request (PR) against the `main` branch.
4. Fill out the **PR Template** description carefully:
   - Reference the issue number it closes (e.g. `Closes #12`).
   - Describe what changed and why.
   - Attach screenshots or screen recordings of UI modifications.
5. Wait for the project maintainers to review your PR. They may ask for modifications before approval.

---

## 🎨 Design System & CSS
If you are modifying the UI, please respect the established design parameters:
- **Typography**: The primary sans-serif font family is `Inter`.
- **Colors**: Keep colors unified:
  - Primary colors use the tailwind `--color-primary-*` scale in `index.css`.
  - Saffron (Indian Saffron): `--color-saffron` (`#FF9933`).
  - Green (Indian Green): `--color-indiaGreen` (`#138808`).
- **Interactive Elements**: All hover/active states should have smooth transitions (e.g., `transition-colors duration-300` or `hover:scale-105 transition-transform`).

---

## 💬 Communication
If you have questions, feel free to start a discussion in the repository, comment on the issue you are assigned to, or contact the core web-development team at NSS NIT Hamirpur.

We look forward to your contributions!
