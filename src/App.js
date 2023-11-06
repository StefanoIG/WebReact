import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
// Agrega la importación de la hoja de estilos de Bootstrap aquí
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
      <Login />
      <Register />
    </div>
  );
}

export default App;
