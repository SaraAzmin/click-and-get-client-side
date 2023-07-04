import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const MenuBar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="hover:bg-slate-300 rounded">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-slate-300 rounded">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:bg-slate-300 rounded">
        <Link to="/reviews">Reviews</Link>
      </li>
      <li className="hover:bg-slate-300 rounded">
        <Link to="/login">Login</Link>
      </li>
      <li className="hover:bg-slate-300 rounded">
        <Link to="/register">Register</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-sky-900 text-white flex justify-between pr-20 lg:py-5 md:py-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 text-sky-900 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl pl-20">
          <img className="w-28 h-auto" src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default MenuBar;
