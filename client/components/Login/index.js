import React from 'react';
import './index.less';

const Login = () => (
  <div className="form-signin-container">
    <form className="form-signin mg-btm">
      <h3 className="heading-desc">
        Entrar
      </h3>
      <div className="social-box">
        <div className="row mg-btm">
          <div className="col-md-12">
            <a href="/api/authentication/facebook/start" className="btn btn-primary btn-block">
              <i className="icon-facebook" />
              Entrar com Facebook
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a href="/api/authentication/google/start" className="btn btn-danger btn-block">
              <i className="icon-twitter" />
              Entrar com Google
            </a>
          </div>
        </div>
      </div>
      <div className="main">
        <input type="text" className="form-control" placeholder="E-mail" />
        <input type="password" className="form-control" placeholder="Senha" />
        <span className="clearfix" />
      </div>
      <div className="login-footer">
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div className="left-section">
              <a href="#">Esqueceu sua senha?</a>
              <a href="#">Registre-se agora</a>
            </div>
          </div>
          <div className="col-xs-6 col-md-6">
            <button type="submit" className="btn btn-large btn-danger float-right">Entrar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);

export default Login;
