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
          marginTop: "64px",
          height: "100vh",
          background: "#ffc0c0",
        }}
      >
        <Offcanvas.Body style={{ paddingTop: "0px" }}>
          <div className="d-flex ">
            <div style={{ flex: 2 }}></div>
            <div style={{ flex: 4, }} >
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
  const [menu, setMenu] = React.useState(true);
  return (
    <>
      <OffCanvasExample placement={"top"} menu={menu} />

      <div className="navbar-component">
        <div className="main-container">
          <div className="left">
            <img src={logo} alt="" />
          </div>

          <div className="right">
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
