import React, { useEffect, useState } from "react";
import "../Home/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../../services/customer/authentication/auth_service";

function CustNav() {
    const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const logout = () => {
    AuthService.logout();
  };

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/cust_home">
        <img
          className="nav__logo"
          src="https://st4.depositphotos.com/5040187/19757/v/450/depositphotos_197571826-stock-illustration-logo-swoosh-global-red-letter.jpg"
          alt="WYPE LOGO"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home"
        >
          HOME
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/mybookings"
        >
          MY BOOKINGS
        </NavLink>
        <NavLink
          onClick={logout}
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGOUT
        </NavLink>
      </div>
    </nav>
  );
}

export default CustNav;