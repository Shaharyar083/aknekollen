import React, { useState, useEffect } from "react";
import "../loginandsignup/admin.css";
import { Form, Input } from "antd";
import { BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
import CustomerAxiosInstance from "../CustomerAxiosInstance"
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";


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

function ResetPassword(props) {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const [values, setvalues] = useState({
        _id: params.id,
        password: "",
        confirmpassword: "",
    });
    const handleChange = (event) => {
        setvalues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.password === values.confirmpassword) {
            CustomerAxiosInstance.post("/admin/updatepassword", values)
                .then((res) => {
                    history.push("/admin/login");
                    swal({
                        title: "",
                        text: res.data.message,
                        icon: "success",
                    })
                })
                .catch((err, res) => {
                    console.log(err);
                    swal({
                        title: "",
                        text: err.response.data.message,
                        icon: "success",
                    })
                });
        } else {
            swal({
                title: "",
                text: "Please confirm your password",
                icon: "success",
            })
        }

    };

    return (
        <div>
            <div className="container-fluid align">
                <div className="row width-height">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="card-wrappers">
                            <div className="card">
                                <span className="heading">Reset Password</span>
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
                                                message: "Please add your new password!",
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
                                    <Form.Item
                                        className="fields"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please add your new password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password
                                            name="confirmpassword"
                                            value={values.confirmpassword}
                                            onChange={(event) => handleChange(event)}
                                            placeholder="confirmpassword"
                                            iconRender={(visible) =>
                                                visible ? <BiLockOpenAlt /> : <BiLockAlt />
                                            }
                                        />
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <button
                                            htmlType="submit"
                                            style={{ width: "180px" }}
                                            className="store-btnss"
                                            onClick={(event) => handleSubmit(event)}
                                        >
                                            Change Password
                                        </button>
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

export default ResetPassword;
