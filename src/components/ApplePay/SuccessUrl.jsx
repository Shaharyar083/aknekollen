import React, { useEffect } from "react";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const SuccessUrl = () => {
    const history = useHistory();
    useEffect(() => {
        swal({
            title: "",
            text: "You're done.We will be in touch shortly.",
            icon: "success",
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

export default SuccessUrl;
