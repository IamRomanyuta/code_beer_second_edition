import React from "react";
import "../styles/Auth.css";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div className="outer-box">
      <div className="auth-main-container">
        <form className="auth-form">
          <div className="header-string">
            <h2>{isLogin ? "Login" : "Registration"}</h2>
          </div>

          <label>email:</label>
          <input type="text" name="email" />
          <label>password:</label>
          <input type="text" name="password" />
          <div className="lower-part">
            <div className="registration-field ">
              {isLogin ? (
                <Link to={REGISTRATION_ROUTE} className="registration-link">
                  Registration
                </Link>
              ) : (
                <Link to={LOGIN_ROUTE} className="registration-link">
                  Login
                </Link>
              )}
            </div>
            <div className="accept-btn-field">
              <input
                className="login-btn"
                type="submit"
                value={isLogin ? "Войти" : "Регистрация"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
