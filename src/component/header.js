import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const NavBar = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  // useEffect(() => {
  //   fetch("https://sat-olt.onrender.com/api", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   });
  // }, []);

  // const logout = () => {
  //   fetch("https://sat-olt.onrender.com/api" + "/logout", {
  //     credentials: "include",
  //     method: "POST",
  //   });
  //   setUserInfo(null);
  // };

  // const userName = userInfo?.userName;
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          SAT_T
        </Link>
        <nav>
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
