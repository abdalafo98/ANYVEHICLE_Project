import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "./../../../src/large_anyvehicle.png";

import "./../signup/form-login-signup.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          localStorage.setItem("token", result.data.token);
          history.replace("/");

          return;
        }

        setMessage(result.data.message);
      })
      .catch((err) => {});
  };
  return (
    <div className="form-login-signup">
      <div>
        <form onSubmit={onSubmitLogin}>
          <img src={Logo} />
          <input
            type="email"
            required
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
          <p>
            don't have account ?{" "}
            <span
              onClick={() => {
                history.push("/signup");
              }}
              style={{ color: "black" }}
            >
              SignUp
            </span>
          </p>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
