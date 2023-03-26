import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY >= 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  //   window.addEventListener("scroll", transitionNavbar);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={show ? "nav nav-black" : "nav"}>
      <div className="nav-content">
        <img
          className="nav-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav-avatar"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt="User avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
