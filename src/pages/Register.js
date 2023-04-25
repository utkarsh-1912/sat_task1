import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const register = async (ev) => {
    try {
      ev.preventDefault();
      const response = await fetch("https://sat-olt.onrender.com/api/user", {
        method: "POST",
        body: JSON.stringify({ userName, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        alert("Wrong Credentials!!");
      }
    } catch (err) {
      alert("Registration Failed!!");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="formBox">
      <form action="" onSubmit={register} className="register">
        <h2>Register</h2>
        <input
          type="text"
          name="userName"
          placeholder="Name"
          value={userName}
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
          required
        />
        <input
          type="email"
          name="Email"
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
          placeholder="Password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          required
        />
        <button type="submit">Submit</button>
        <p className="formText">
          Already have a account?
          <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
