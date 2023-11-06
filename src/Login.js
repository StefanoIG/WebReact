import React from 'react';

const Login = () => {
  return (
    
    <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
      <div className="container py-5 h-100" id="form_admins">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={process.env.PUBLIC_URL + '/logo.png'} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-4 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                      </div>
                      <span className="h1 fw-bold mb-0">Recursos Humanos ULEAM</span>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Inicia sesión con tus credenciales</h5>
                      <div className="form-outline mb-4">
                        <input type="email" id="inputCorreoRegistro" className="form-control form-control-lg" required onInput="validarCorreoElectronico()" />
                        <p id="resultadoCorreoElectronico"></p>
                        <label className="form-label" htmlFor="form2Example17">Correo Institucional</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" required onInput="verificarPass()" />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>
                      <a className="btn btn-primary" role="button" href="dashboard.html">Iniciar Sesión</a>
                      <p className="h6 mt-3">Si eres un usuario, que no eres de recursos humanos, <a href="#" id="Mostrar_login">da clic aquí</a></p>
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

export default Login;
