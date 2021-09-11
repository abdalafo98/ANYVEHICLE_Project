import React, { useState, useEffect } from "react";
import "./navigation.css";
import Logo from "./../../../src/large_anyvehicle.png";
import { AiOutlineMenu } from "react-icons/ai";
const Navigation = () => {
  const nav = ["Home", "About Us", "Services", "Blog", "Shop", "Contact Us"];
  const [toggleNav, setToggleNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
            {nav.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
        )}

        <AiOutlineMenu onClick={toggle} size={40} className="btn" />
      </div>
    </nav>
  );
};
export default Navigation;
