import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { axios } from "axios";
export const Login = () => {
  const { isAuth, setIsAuth } = useContext(authContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let response = axios.post(`https://reqres.in/api/login`, {
      email,
      password,
    });
    const { token } = response.data;
    console.log(token);
  };

  return (
    <div>
      {/* <button onClick={() => setIsAuth(!isAuth)}>{`Login ${isAuth}`}</button> */}
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
