import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../index";
import "../styles/NavBar.css";
import { LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <nav className="nav">
      <div className="left-side-nav">
        <a href="/" className="logo-string">
          BeerCode.net
        </a>
      </div>
      {user.isAuth ? (
        <div className="right-side-nav">
          <Link to="/profile" className="profile">
            Profile
          </Link>
          <Link to="/basket" className="basket">
            Basket
          </Link>
        </div>
      ) : (
        <div className="right-side-nav">
          <Link
            to={LOGIN_ROUTE}
            className="login"
            onClick={() => {
              user.setIsAuth(true);
            }}
          >
            Auth
          </Link>
        </div>
      )}
    </nav>
  );
});

export default NavBar;
