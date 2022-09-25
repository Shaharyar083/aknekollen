import React, { useState } from "react";
import "./navbar.scss";
import { Button, Offcanvas } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import tip1 from "../../assets/images/tip1.svg";
import tip2 from "../../assets/images/tip2.svg";
import tip3 from "../../assets/images/tip3.svg";
import tip4 from "../../assets/images/tip4.svg";
import tip5 from "../../assets/images/tip5.svg";
import tip6 from "../../assets/images/tip6.svg";
// images & icons
import logo5 from "../../assets/images/logo5.png";

function OffCanvasExample({ menu, name, ...props }) {
  const array = [tip1, tip2, tip3, tip4, tip5, tip6];
  return (
    <>
      <Offcanvas
        show={menu}
        {...props}
        style={{
          marginTop: "64px",
          height: "100%",
          background: "#ffc0c0",
          width: "100vw",
        }}
      >
        <Offcanvas.Body
          style={{
            paddingTop: "0px",
            background: "#ffc0c0",
          }}
        >
          <div className="d-flex ">
            <div style={{ flex: 2 }} className="skip_text"></div>
            <div style={{ flex: 4 }}>
              <div className="d-flex flex-column mt-5 ">
                <div className="heding_dstyle">Om oss</div>
                <div className="heding_dstyle">Vanliga frågor</div>
                <div className="heding_dstyle">Kontakta oss</div>
              </div>
            </div>
            <div
              style={{ flex: 4, borderLeft: "1px solid #000", height: "95vh" }}
              className="nav_text_align"
            >
              <div className="nav_text_style">
                Do not miss our other checks!
              </div>
              <div>
                {array.map((data, index) => {
                  return (
                    <div style={{ marginTop: "24px" }} key={index}>
                      <img src={data} alt="" height={32} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Navbar = (props) => {
  const history = useHistory();
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
      {/* <OffCanvasExample placement={"top"} menu={menu} /> */}

      <div className="navbar-component">
        <div className="main-container">
          <div className="left text">
            <img
              src={logo5}
              alt=""
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="right">
            {navbarScroll && props.flag && (
              <div className="navbar-scroll">
                <button className="button">
                  <div className="text" onClick={() => props.openModal()}>
                    Get a doctor's assessment here
                  </div>
                </button>
              </div>
            )}
            {/* <div
              className={menu ? "close" : "hamburger"}
              className="hamburger"
              onClick={() => setMenu(!menu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
