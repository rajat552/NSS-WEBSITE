import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader'; // Make sure the path matches where you created Preloader.jsx

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading ? (
        /* 1. Show the animated preloader first */
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        /* 2. Show the main website once the loading hits 100% */
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;