import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { notification } from "antd";
import { MdDeleteSweep } from "react-icons/md";
// import UpdateCategory from "../UpdateCategory";0

// material ui tables
import Modal from "react-bootstrap/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { FiEdit } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Redux/adminReducer";
import "../loginandsignup/admin.css";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    container: {
        maxHeight: 440,
    },
});

// import Alert from "react-bootstrap/Alert";
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

function UserResponses() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);
    console.log("category reducer", store.categoryReducer);
    const [editModalVisible, setEditModalVisible] = React.useState(false);
    const [editItem, setEditItem] = React.useState(null);

    // material uitables

    const classes = useStyles();
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const createData = (
        index,
        _id,
        email,
        response,
        trackingClientInfo,
        edit,
        del
    ) => {
        return {
            index,
            _id,
            email,
            response,
            trackingClientInfo,
            edit,
            del,
        };
    };

    useEffect(() => {
        setRows([]);
        store?.responseReducer?.responses?.map((data, index) => {
            setRows((pValue) => {
                return [
                    ...pValue,
                    createData(
                        index + 1,
                        data._id,
                        data.email,
                        data.response,
                        data.trackingClientInfo,
                        <span className="cursor" onClick={() => showEditModal(data)}>
                            <FiEdit style={{ color: "blue" }} />
                        </span>,
                        <span className="cursor" onClick={() => showModal(data)}>
                            <MdDeleteSweep
                                className="cursor"
                                style={{ color: "red" }}
                                size={20}
                            />
                        </span>
                    ),
                ];
            });
        });
    }, [store?.responseReducer?.responses]);
    //

    const showEditModal = (data) => {
        console.log("ali raza", data);
        setEditModalVisible(true);
        setEditItem(data);
    };
    const closeModel = () => {
        setEditModalVisible(false);
    };

    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [deleteItemId, setDeleteItemId] = React.useState(null);

    const showModal = (itemId) => {
        setIsModalVisible(true);
        console.log("item id", itemId);
        setDeleteItemId(itemId);
    };

    const handleCanceled = () => {
        setIsModalVisible(false);
    };

    const handleDelete = (item) => {
        dispatch(deleteUser(item._id));
        setIsModalVisible(false);
    };

    return (
        <div className="container-fluid  height-auto">
            <div className="text-center space_top">
                <p className="main_heding">Users Responses</p>
            </div>
            <div
                className="row mlr-15 scroll-table-admin mb-5 "
                style={{ padding: "3%" }}
            >
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow hover>
                                    <TableCell padding="normal" align="center">
                                        Sr No
                                    </TableCell>
                                    <TableCell padding="normal" align="center">
                                        Response ID
                                    </TableCell>
                                    <TableCell padding="normal" align="center">
                                        Location
                                    </TableCell>
                                    <TableCell padding="normal" align="center">
                                        User Email
                                    </TableCell>
                                    <TableCell padding="normal" align="center">
                                        No of Questions
                                    </TableCell>
                                    <TableCell padding="normal" align="center">
                                        View Response
                                    </TableCell>
                                    {/* <TableCell padding="normal" align="center">
                                        Delete
                                    </TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    : rows
                                ).map((row, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center" component="th" scope="row">
                                                {row.index}
                                            </TableCell>
                                            <TableCell align="center">{row._id}</TableCell>
                                            <TableCell align="center">{row.trackingClientInfo.country + "," + row.trackingClientInfo.regionName}</TableCell>
                                            <TableCell align="center">{row.email}</TableCell>
                                            <TableCell align="center">
                                                {row?.response?.length}
                                            </TableCell>
                                            <TableCell align="center">{row.edit}</TableCell>
                                            {/* <TableCell align="center">{row.del}</TableCell> */}
                                        </TableRow>
                                    );
                                })}
                                <Modal
                                    show={isModalVisible}
                                    centered
                                    onHide={handleCanceled}
                                    aria-labelledby="contained-modal-title-vcenter"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Delete User
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="show-grid">
                                        <p>Are you sure to delete this User?</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => handleDelete(deleteItemId)}>
                                            Ok
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <Modal
                                    show={editModalVisible}
                                    centered
                                    onHide={() => setEditModalVisible(false)}
                                    aria-labelledby="contained-modal-title-vcenter"
                                    size="xl"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            User Response
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="show-grid">
                                        {editItem &&
                                            editItem?.response?.map((data, index) => {
                                                return (
                                                    <>
                                                        <div className="">
                                                            <h5 style={{ color: "burlywood" }}>Question :{data.question}</h5>
                                                            <div className="d-flex align-items-center">
                                                                <h5>UserResponse:</h5>
                                                                <span style={{ marginLeft: "10px", marginBottom: "7px" }}>
                                                                    {data.answer}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                    </Modal.Body>
                                </Modal>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );
}

export default UserResponses;
