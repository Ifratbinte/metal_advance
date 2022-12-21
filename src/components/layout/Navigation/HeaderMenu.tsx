import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const HeaderMenu = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavBar = () => {
    navRef.current?.classList?.toggle("responsive-nav");
  };
  return (
    <header>
      <div className="nav-area d-flex align-items-center my-0 mx-auto">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="nav-left">
            <Link to="/" className="header-logo">
              <img src="images/benemoy-securities.png" alt="" />
            </Link>
          </div>
          <div className="nav-right" ref={navRef}>
            <Navbar />
            <button className="btn button-base-primary">Login</button>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </div>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};
export default HeaderMenu;