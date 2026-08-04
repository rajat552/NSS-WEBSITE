# NSS NIT Hamirpur Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)

The official website for **National Service Scheme (NSS), National Institute of Technology Hamirpur (NITH)**. This web application provides a central portal for tracking social service initiatives, scheduling blood donation requests, organizing community events, and managing student registrations for volunteer services.

---

## 🌟 Key Features

- **Home Dashboard**: Displays ongoing updates, latest announcements, and highlighted impact metrics.
- **Impact & Initiatives**: Information on NSS wings and initiatives like *Blood Donation Camps*, *Parishodh* (problem-solving), *Umang* (underprivileged education), and *Swachh Campus*.
- **Blood Request Portal**: Enables community members to submit requests for urgent blood donation, connecting them with donor groups.
- **Event Management**: Displays calendar and details of upcoming community outreach, volunteer projects, and orientation events.
- **Think Tank & Innovation**: Collaborative space for brainstorming, community research, and project documentation.
- **Join Us Portal**: Streamlined application form for students to register as volunteers.
- **Responsive Premium UI**: Sleek, modern, accessible design styled with Tailwind CSS v4, supporting dynamic dark and light mode themes.

---

## 🛠️ Technology Stack

### Frontend (Client)
- **Framework**: [React 19](https://react.dev/) with [Vite](https://vite.dev/) for optimal build times and Fast Refresh.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first styling with hardware-accelerated animations).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Routing**: [React Router v7](https://reactrouter.com/) (lazy-loaded pages with custom ErrorBoundary fallback UI).
- **API Clients**: Axios with custom interceptors for central configuration.

### Backend (Server)
- **Runtime**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/).
- **Security**: [Helmet](https://helmetjs.github.io/) (HTTP response header protection) and CORS policies.
- **Logging**: [Morgan](https://github.com/expressjs/morgan) (HTTP request logger middleware).
- **Validation**: [Express Validator](https://express-validator.github.io/docs/) for secure route input checks.

---

## 📂 Repository Structure

```text
NSS-WEBSITE/
├── backend/                  # Express.js Server
│   ├── src/
│   │   ├── config/           # Database & environment config (empty)
│   │   ├── controllers/      # Route controllers/handlers (e.g. userController)
│   │   ├── middleware/       # Custom middleware (error, notFound, validation)
│   │   ├── models/           # Data models (empty)
│   │   ├── routes/           # REST endpoints mapping
│   │   ├── services/         # Third-party API helpers (empty)
│   │   ├── utils/            # Utility & helper helper functions (empty)
│   │   └── app.js            # Express app definition & middleware setup
│   ├── server.js             # Backend entry point
│   ├── package.json
│   └── .env.example
├── frontend/                 # React 19 Frontend (Vite)
│   ├── src/
│   │   ├── assets/           # Media, logos, and images
│   │   ├── components/       # Shared UI, layout components
│   │   ├── context/          # React Context (e.g. ThemeContext)
│   │   ├── hooks/            # Custom reusable hooks
│   │   ├── pages/            # View pages (Home, About, Events, JoinUs, BloodRequest, etc.)
│   │   ├── routes/           # Router configurations (AppRoutes.jsx)
│   │   ├── services/         # Axios api setup (api.js)
│   │   ├── App.jsx           # Main App driver
│   │   ├── index.css         # Tailwind directives & CSS design tokens
│   │   └── main.jsx          # React DOM entry point
│   ├── package.json
│   └── .env.example
├── package.json              # Root configurations using npm workspaces
├── CONTRIBUTING.md           # Step-by-step contribution instructions
└── LICENSE                   # MIT License text
```

---

## 🚀 Quick Start Guide

This project is set up using **npm workspaces**. You can manage dependencies and run both the server and client concurrently from the root directory.

### Prerequisites
- **Node.js** v18 or later
- **npm** v9 or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/NSS-WEBSITE.git
   cd NSS-WEBSITE
   ```

2. **Install all dependencies:**
   This command installs dependencies for the root, frontend, and backend projects simultaneously:
   ```bash
   npm run install-all
   ```

3. **Configure Environment Variables:**
   - Copy the environment template in the `backend` folder:
     ```bash
     cp backend/.env.example backend/.env
     ```
   - Copy the environment template in the `frontend` folder:
     ```bash
     cp frontend/.env.example frontend/.env
     ```
   - Edit the values inside `.env` if your local database or API configuration differs.

### Running in Development

To start both the backend server and the frontend client concurrently, run:
```bash
npm run dev
```

- **Frontend Client**: Runs at [http://localhost:5173](http://localhost:5173) (Vite server)
- **Backend API**: Runs at [http://localhost:5000](http://localhost:5000) (Express server with nodemon)

To start folders individually, you can use:
```bash
# Start frontend only
npm run frontend

# Start backend only
npm run backend
```

---

## 🤝 Contributing

We welcome contributions from everyone! To keep the repository clean and professional, please review our [CONTRIBUTING.md](CONTRIBUTING.md) guide for details on branching, PR submission checklists, and coding guidelines.

1. **Fork** this repository.
2. Create a new feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m "feat: add some amazing feature"`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a **Pull Request**.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
