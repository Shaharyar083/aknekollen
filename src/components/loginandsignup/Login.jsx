import React, { useState, useEffect } from "react";
import "./admin.css";
import swal from "sweetalert";
import { Form, Input, Button } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
import CustomerAxiosInstance from "../CustomerAxiosInstance";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../Redux/adminReducer";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        // offset: 8,
        span: 24,
    },
};

const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

function Login(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const [values, setvalues] = useState({
        email: "",
        password: "",
    });
    const handleChange = (event) => {
        setvalues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CustomerAxiosInstance.post("/admin/login", values)
            .then((res) => {
                const token = res.data.token;
                CustomerAxiosInstance.defaults.headers.authorization = token;
                CustomerAxiosInstance.defaults.headers.authorization = token;
                cookies.set("akneedmintoken", token);
                history.push("/dashboard");
                dispatch(setCurrentUser(token));
            })
            .catch((err, res) => {
                console.log(err);
                swal({
                    title: "",
                    text: err.response.data.message,
                    icon: "error",
                });
            });
    };

    return (
        <div>
            <div className="container-fluid align">
                <div className="row width-height">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="card-wrappers">
                            <div className="card">
                                <span className="heading">User Login</span>
                                <Form
                                    {...layout}
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        className="fields"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your email!",
                                            },
                                        ]}
                                    >
                                        <Input
                                            name="email"
                                            onChange={(event) => handleChange(event)}
                                            value={values.email}
                                            placeholder="Email"
                                            suffix={<AiOutlineUser />}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        className="fields"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password
                                            name="password"
                                            value={values.password}
                                            onChange={(event) => handleChange(event)}
                                            placeholder="Password"
                                            iconRender={(visible) =>
                                                visible ? <BiLockOpenAlt /> : <BiLockAlt />
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item {...tailLayout}>
                                        <div className="d-flex justify-content-evenly align-items-center">
                                            <button
                                                htmlType="submit"
                                                className="store-btnss"
                                                onClick={(event) => handleSubmit(event)}
                                            >
                                                Login
                                            </button>
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "12px",
                                                    cursore: "pointer",
                                                }}
                                                onClick={() => history.push("/admin/forgotpassword")}
                                            >
                                                Forgot your password?
                                            </span>
                                        </div>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
