import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const login = async (ev) => {
    ev.preventDefault();
    const response = await fetch(
      "https://sat-olt.onrender.com/api/auth/signin",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("Wrong Credentials!!");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="formBox">
      <form action="" onSubmit={login} className="login">
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          id="Text"
          placeholder="Email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          required
        />
        <input
          type="password"
          name="password"
          id="Password"
          placeholder="Password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          required
        />
        <button type="submit">Submit</button>
        <p className="formText">
          Don't have an account?
          <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
