import React, { useState } from "react";
import "./navbar.scss";
import { Button, Offcanvas } from "react-bootstrap";

// images & icons
import logo from "../../assets/images/logo.svg";

function OffCanvasExample({ menu, name, ...props }) {
  return (
    <>
      <Offcanvas
        show={menu}
        {...props}
        style={{
          marginRight: "17px",
          height: "100vh",
          width: "100%",
        }}
      >
        <Offcanvas.Body
          style={{
            paddingTop: "0px",
            background: "#ffc0c0",
          }}
        >
          <div className="d-flex ">
            <div style={{ flex: 2 }}></div>
            <div style={{ flex: 4 }}>
              <div className="d-flex flex-column mt-5 ">
                <div className="heding_dstyle">Om oss</div>
                <div className="heding_dstyle">Vanliga frågor</div>
                <div className="heding_dstyle">Kontakta oss</div>
              </div>
            </div>
            <div
              style={{ flex: 4, borderLeft: "1px solid #000", height: "95vh" }}
            >
              2
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Navbar = () => {
  const [menu, setMenu] = React.useState(false);
  const [navbarScroll, setNavbarScroll] = React.useState(false);

  const handleNavbarScroll = () => {
    if (window.scrollY >= 80) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleNavbarScroll);

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);
  return (
    <>
      <OffCanvasExample placement={"top"} menu={menu} />

      <div className="navbar-component">
        <div className="main-container">
          <div className="left">
            <img src={logo} alt="" />
          </div>

          <div className="right">
            {navbarScroll && (
              <div className="navbar-scroll">
                <button className="button">
                  <div className="text">Get a doctor's assessment here</div>
                </button>
              </div>
            )}

            <div
              className={menu ? "close" : "hamburger"}
              onClick={() => setMenu(!menu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
