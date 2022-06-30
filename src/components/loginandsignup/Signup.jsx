import React, { useState } from 'react'
import './admin.css'
import { Form, Input, Button } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLockOpenAlt, BiLockAlt } from 'react-icons/bi'
import CustomerAxiosInstance from '../CustomerAxiosInstance'
import Alert from 'react-bootstrap/Alert'
import { FaUserTie } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
}
const tailLayout = {
    wrapperCol: {
        // offset: 8,
        span: 24,
    },
}

const onFinish = (values) => {
    console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
}

function Signup(props) {
    const history = useHistory()
    const [values, setvalues] = useState({
        email: '',
        userName: '',
        password: '',
        isAdmin: false,
    })
    const handleChange = (event) => {
        setvalues({ ...values, [event.target.name]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        CustomerAxiosInstance.post('admin/signup', values)
            .then((res) => {
                history.push('/admin/login')
            })
            .catch((err, res) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="container-fluid align">
                <div className="row width-height">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="card-wrappers">
                            <div className="card">
                                <span className="heading">User Signup</span>
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
                                                message: "Please input your username!",
                                            },
                                        ]}
                                    >
                                        <Input
                                            name="userName"
                                            onChange={(event) => handleChange(event)}
                                            value={values.userName}
                                            placeholder="Username"
                                            suffix={<AiOutlineUser />}
                                        />
                                    </Form.Item>
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
                                        <button
                                            htmlType="submit"
                                            className="store-btnss"
                                            onClick={(event) => handleSubmit(event)}
                                        >
                                            Signup
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
