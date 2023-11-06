import React, { useState } from 'react';

// Función para validar contraseñas
function verificarPass(password) {
  const regexPass = /^(?=.*[A-Z])(?=.*\d).{10,}$/;

  if (!regexPass.test(password)) {
    return "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
  }
  return "";
}

// Función para verificar que las contraseñas coincidan
function comprobarPass(password, confirmarPass) {
  if (password !== confirmarPass) {
    return "Las contraseñas no coinciden.";
  }
  return "";
}

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmarPass, setConfirmarPass] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmarPassError, setConfirmarPassError] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const error = verificarPass(newPassword);
    setPasswordError(error);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPass = event.target.value;
    setConfirmarPass(newConfirmPass);
    const error = comprobarPass(password, newConfirmPass);
    setConfirmarPassError(error);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario si las contraseñas son válidas.
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleFormSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                      </div>
                      <span className="h1 fw-bold mb-0">Recursos Humanos ULEAM</span>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}></h5>
                      <p>Estimado, para completar el registro ingrese un password</p>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Escriba su password"
                        required
                        value={password}
                        onInput={handlePasswordChange}
                      />
                      <p id="resultadoPass" style={{ color: 'red' }}>{passwordError}</p>
                      <div id="passwordHelpBlock" className="form-text">
                        Su password debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                      </div>
                      <input
                        type="password"
                        id="confirmarPass"
                        className="form-control"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Repita su password"
                        required
                        value={confirmarPass}
                        onInput={handleConfirmPasswordChange}
                      />
                      <p id="mensajePass" style={{ color: 'red' }}>{confirmarPassError}</p>
                      <div id="passwordHelpBlock" className="form-text">
                        Los passwords deben coincidir.
                      </div>
                      <button type="submit" className="btn btn-primary">Confirmar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
