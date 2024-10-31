import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ImageUploadPage from './pages/ImageUploadPage';
import Register from './pages/RegisterPage'; // Importa el componente de registro
import AddContactInfoPage from './pages/AddContactInfoPage'; // Importa la nueva vista

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/register" element={<Register />} /> {/* Nueva ruta para registro */}
        <Route path="/add-contact-info" element={<AddContactInfoPage />} /> {/* Ruta para la nueva vista */}
      </Routes>
    </Router>
  );
}

export default App;
