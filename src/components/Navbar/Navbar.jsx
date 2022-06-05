import * as React from "react";
import "./navbar.scss";

// images & icons
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  return (
    <div className="navbar-component">
      <div className="main-container">
        <div className="left">
          <img src={logo} alt="" />
        </div>

        <div className="right">
          <div
            className={menu ? "hamburger" : "close"}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
