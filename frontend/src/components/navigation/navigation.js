import React, { useState, useEffect } from "react";
import "./navigation.css";
import Logo from "./../../../src/large_anyvehicle.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  const nav = ["Home", "About Us", "Services", "Blog", "Shop", "Contact Us"];
  const [toggleNav, setToggleNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let token = localStorage.getItem("token");
  let role_id = localStorage.getItem("role_id");

  const toggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav className="navigation">
      <div>
        <img src={Logo} />
      </div>
      <div className="pages">
        {(toggleNav || screenWidth > 739) && (
          <ul>
            {token ? (
              <>
                {role_id == 1 ? (
                  <>
                    <li>
                      <Link to="/request/maintenance" className="links">
                        Request Maintenance
                      </Link>
                    </li>
                    <li>
                      <Link to="/myorder" className="links">
                        My Order
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}
                <li
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  <Link to="/" className="links">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="links">
                  Login
                </Link>
              </li>
            )}
          </ul>
        )}

        <AiOutlineMenu onClick={toggle} size={40} className="btn" />
      </div>
    </nav>
  );
};
export default Navigation;
