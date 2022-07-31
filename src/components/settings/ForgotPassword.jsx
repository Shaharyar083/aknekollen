import React, { useState, useEffect } from "react";
import "../loginandsignup/admin.css";
import { Form, Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import CustomerAxiosInstance from "../CustomerAxiosInstance"
import { Link, useHistory } from "react-router-dom";
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

function ForgotPassword(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    const [values, setvalues] = useState({
        email: "",
    });
    const handleChange = (event) => {
        setvalues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        CustomerAxiosInstance.post("/admin/forgetPassword", values)
            .then((res) => {
                swal({
                    title: "",
                    text: res.data.message,
                    icon: "success",
                })
                history.push("/admin/login")
            })
            .catch((err, res) => {
                console.log(err);
                swal({
                    title: "",
                    text: "Sorry ! No User Found",
                    icon: "error",
                })
            });
    };

    return (
        <div>
            <div className="container-fluid align">
                <div className="row width-height">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="card-wrappers">
                            <div className="card">
                                <span className="heading">Forgot Password</span>
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



                                    <Form.Item {...tailLayout}>
                                        <button
                                            htmlType="submit"
                                            className="store-btnss"
                                            onClick={(event) => handleSubmit(event)}
                                        >
                                            Submit
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

export default ForgotPassword;
