import React, { useContext, useState } from "react";
import "../styles/Auth.css";
import { Link, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className="outer-box">
      <div className="auth-main-container">
        <form className="auth-form">
          <div className="header-string">
            <h2>{isLogin ? "Login" : "Registration"}</h2>
          </div>

          <label>email:</label>
          <input
            type="email"
            placeholder="Enter email here..."
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
              <button className="login-btn" onClick={click}>
                {isLogin ? "Войти" : "Регистрация"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Auth;
