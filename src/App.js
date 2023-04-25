import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import Main from "./pages/Main";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <main className="App">
        <NavBar />
        <Routes>
          <Route index element={<Main />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/create"} element={<CreatePost />} />
        </Routes>
      </main>
    </UserContextProvider>
  );
}

export default App;
