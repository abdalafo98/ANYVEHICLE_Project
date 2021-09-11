import React, { useState } from "react";
import "./form-login-signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Logo from "./../../../src/large_anyvehicle.png";
function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        firstName,
        lastName,
        email,
        password,
        role_id: "1",
      })
      .then((result) => {
        if (result.status === 201) {
          history.push("/login");
          return;
        }
        setMessage(result.data.message);
      })
      .catch((err) => {});
  };

  return (
    <div className="form-login-signup">
      <div>
        <form onSubmit={signup}>
          <img src={Logo} />
          <input
            type="text"
            placeholder="first name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            required
            placeholder="last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
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
          <button type="submit">SignUp</button>
          <p>
            Do you have account ?{" "}
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </span>
          </p>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
