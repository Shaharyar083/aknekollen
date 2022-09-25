import React, { useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
const CancelUrl = () => {
    const history = useHistory();
    useEffect(() => {
        swal({
            title: "",
            text: "Your payment has been canceled please try again",
            icon: "error",
        }).then((data) => {
            if (data) {
                history.push("/");
            }
        });
    }, []);

    return (
        <>
            <div></div>
        </>
    );
};

export default CancelUrl;
