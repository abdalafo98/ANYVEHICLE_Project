import React from "react";
import "./home.css";
import { useHistory } from "react-router";
const Home = () => {
  let token = localStorage.getItem("token");
  let role_id = localStorage.getItem("role_id");

  const history = useHistory();
  return (
    <div className="home">
      <div>
        <h1>Maintenance Your Car Now</h1>
        <button
          onClick={() => {
            token && role_id == 1
              ? history.push("/request/maintenance")
              : history.push("/login");
          }}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Home;
