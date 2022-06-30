import React, { useEffect } from "react";
import clsx from "clsx";
// import addNotification from "react-push-notification";
import { OverlayTrigger, Popover, Navbar, Button } from "react-bootstrap";
// import socketIOClient from "socket.io-client";
import IconButton from "@material-ui/core/IconButton";
import { FaBars } from "react-icons/fa";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { MdMenuBook } from "react-icons/md";
import { RiBook2Fill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllNotifications,
    pushNotification,
    seenNotifications,
} from "../Redux/notificationReducer";
import { handleToggleSidebar } from "../Redux/navReducer";

// var socket = socketIOClient(process.env.REACT_APP_BASE_URL);

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        // background: "#1a1a27"
    },
    appBar: {
        // zIndex:1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        background: "#1a1a27",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: "#1a1a27",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const TopBar = () => {
    const dispatch = useDispatch();
    const store = useSelector(
        (state) => state?.notificationReducer?.notifications
    );
    const classes = useStyles();
    const theme = useTheme();
    const [ncount, setNcount] = React.useState();
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        // dispatch(getAllNotifications())
    }, []);


    const seenAllNotification = async (e) => {
        setNcount(0);
        await dispatch(seenNotifications());
    };

    const handleDrawerOpen = async () => {
        console.log("open toglled");
        await dispatch(handleToggleSidebar());
    };

    // useEffect(() => {
    //     socket.on("notification", async (notification) => {
    //         console.log("inside side bar", notification);
    //         dispatch(pushNotification(notification));
    //         addNotification({
    //             // onClick: (e) => {
    //             //   console.log("hi thsi is ali raza");
    //             //   history.push("/admin/dashboard");
    //             // },
    //             duration: 5000, //optional, default: 5000,
    //             title: "you made a new sale!",
    //             // subtitle: "you made a new sale!",
    //             message: notification.message,
    //             theme: "darkblue",
    //             native: true, // when using native, your OS will handle theming.
    //         });
    //     });
    // }, [socket]);

    useEffect(() => {
        let unseen = store?.filter((n) => {
            return n.seen === false;
        });
        console.log("unseen length", unseen);
        setNcount(unseen?.length);
    }, [store]);

    const popover = (
        <Popover id="popover-basic" className="pop_basics">
            <Popover.Header
                as="h3"
                style={{ marginBottom: "0px" }}
                className="pop_head_img"
            >
                Notifications
            </Popover.Header>
            <Popover.Body bsPrefix="over">
                {store?.map((nf, index) => {
                    return (
                        <>
                            <div className="d-flex pb-3" key={index}>
                                <span style={{ paddingRight: "15px" }}>
                                    {nf.type === "feedback" ? (
                                        <MdMenuBook />
                                    ) : (
                                        <RiBook2Fill className="md_menu" />
                                    )}
                                </span>
                                <div>
                                    <div className="d-flex flex-column">
                                        <span className="feed_span">
                                            {nf.type === "feedback"
                                                ? "New Feedback Received"
                                                : "You made a new sale!"}
                                        </span>
                                        <span style={{ color: "gray" }}>{nf.message}</span>
                                        <span>{nf.time}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Button
                        variant="dark"
                        className="hide-on-large-only mr-2 "
                        onClick={() => handleDrawerOpen()}
                    >
                        <FaBars />
                    </Button>
                    {/* <OverlayTrigger
                        trigger="click"
                        placement="bottom-end"
                        overlay={popover}
                    >
                        <div className="cursorss" onClick={(e) => seenAllNotification(e)}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    alignContent: "center",
                                }}
                            >
                                <IoIosNotificationsOutline className="bell_icon" />
                                {ncount > 0 && (
                                    <div className="notification_style">
                                        <span style={{ fontSize: "10px" }}>{ncount}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </OverlayTrigger> */}

                </Toolbar>
            </AppBar>
        </>
    );
};

export default TopBar;
