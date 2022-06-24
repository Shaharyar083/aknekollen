import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import { FaGem } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    handleToggleSidebar,
    changeDashboardMargin,
} from "../Redux/navReducer";
import TopBar from "./TopBar";
import { RiDashboardLine } from "react-icons/ri";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const SideBar = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => {
        console.log("=======================================", checked);
        dispatch(changeDashboardMargin());
        setChecked((prev) => !prev);
    };

    const handlelogout = () => {
        cookies.remove("akneedmintoken");
        history.push("/admin/login");
    };
    const handleDrawerOpen = async () => {
        dispatch(handleToggleSidebar());
    };

    return (
        <>
            <TopBar />
            <ProSidebar
                style={{ background: "red", height: "100vh", position: "fixed" }}
                collapsed={checked}
                image="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg2.de0153c5.jpg"
                toggled={store.navReducer.toggled}
                breakPoint="lg"
                onToggle={() => handleDrawerOpen()}
            >
                <SidebarHeader className="logo_style">
                    {/* <img
                        src={Logo}
                        className="cursor image"
                        onClick={() => toggleChecked()}
                    /> */}
                    <h4 className="cursor image" style={{ color: "white" }} onClick={() => toggleChecked()}>
                        Web Site Logo
                    </h4>
                </SidebarHeader>
                <Menu iconShape="round">
                    <MenuItem icon={<RiDashboardLine />}>
                        <Link to="/dashboard/responselist">User Responses</Link>
                    </MenuItem>
                    {store?.adminReducer?.currentUser?.isAdmin && (
                        <MenuItem icon={<RiDashboardLine />}>
                            <Link to="/dashboard">Users</Link>
                        </MenuItem>
                    )}
                </Menu>
                <SidebarFooter style={{ paddingBottom: "50%" }}>
                    <Menu>
                        <MenuItem
                            onClick={(e) => {
                                handlelogout(e);
                            }}
                            icon={<FiLogOut size={24} className="icon_dashboard_color" />}
                        >
                            <span className="content">Log out</span>
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};
export default SideBar;
