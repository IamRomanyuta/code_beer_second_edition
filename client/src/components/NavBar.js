import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../index";
import "../styles/NavBar.css";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
// import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  // const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="left-side-nav">
        <Link to={SHOP_ROUTE} className="logo-string">
          BeerCode.net
        </Link>
      </div>
      {user.isAuth ? (
        <div className="right-side-nav">
          <Link
            to={LOGIN_ROUTE}
            className="nav-links"
            // onClick={() => {
            //   user.setIsAuth(false);
            // }}
          >
            Logout
          </Link>
          <Link to={PROFILE_ROUTE} className="nav-links">
            Profile
          </Link>
          <Link to={BASKET_ROUTE} className="nav-links">
            Basket
          </Link>
          <Link to={ADMIN_ROUTE} className="nav-links">
            Admin
          </Link>
        </div>
      ) : (
        <div className="right-side-nav">
          <Link
            to={LOGIN_ROUTE}
            className="nav-links"
            // onClick={() => {
            //   user.setIsAuth(true);
            // }}
          >
            Auth
          </Link>
        </div>
      )}
    </nav>
  );
});

export default NavBar;
