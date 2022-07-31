import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import CustomerAxiosInstance from "../CustomerAxiosInstance";

const Settings = () => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const [user, setUser] = useState({
        _id: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        setUser({
            ...user,
            userName: store?.adminReducer?.currentUser?.userName,
            email: store?.adminReducer?.currentUser?.email,
            _id: store?.adminReducer?.currentUser?._id,
        });
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (user.password === user.confirmPassword) {
            try {
                let { data } = await CustomerAxiosInstance.post(
                    "/admin/updatesettings",
                    user
                );
                if (data) {
                    swal({
                        title: "",
                        text: data.message,
                        icon: "success",
                    });
                    setUser({
                        ...user,
                        userName: data.user.userName,
                        email: data.user.email,
                    });
                }
            } catch (error) {
                swal({
                    title: "",
                    text: "Internal Server Error",
                    icon: "error",
                });
            }
        } else {
            swal({
                title: "",
                text: "Please confirm your password",
                icon: "error",
            });
        }
    };
    return (
        <>
            <div className="container-fluid  height-auto" style={{ height: "100%" }}>
                <div className="height-ourspeciality  m-5">
                    <div style={{ height: "100%" }}>
                        <p className="main_heding mt-2">User Settings</p>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Form.Label>User Name</Form.Label>
                                    <Form.Control
                                        value={user?.userName}
                                        onChange={(e) => handleChange(e)}
                                        name="userName"
                                        placeholder="User Name"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        value={user.email}
                                        onChange={(e) => handleChange(e)}
                                        name="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Form.Label>Add New Password</Form.Label>
                                    <Form.Control
                                        value={user.password}
                                        onChange={(e) => handleChange(e)}
                                        name="password"
                                        placeholder="Add New Password"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        value={user.confirmPassword}
                                        onChange={(e) => handleChange(e)}
                                        name="confirmPassword"
                                        placeholder="Confirm New Password"
                                    />
                                </Form.Group>
                            </Row>
                        </Form>
                    </div>
                </div>

                <div>
                    <Button
                        variant="primary"
                        style={{ marginLeft: "48px" }}
                        onClick={(event) => handleSubmit(event)}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Settings;
