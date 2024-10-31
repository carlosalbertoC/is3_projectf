import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ImageUploadPage from './pages/ImageUploadPage';
import RegisterPage from './pages/RegisterPage'; // Importa la página de registro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
