import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ImageUploadPage from './pages/ImageUploadPage'; // Importa la página de subir imagen

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
