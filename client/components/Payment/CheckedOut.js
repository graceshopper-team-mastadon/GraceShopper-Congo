const React = require("react");
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CheckedOut = () => {
    const navigate = useNavigate();
    const returnHome = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (<div><center> <h1>Congrats you've been checked out! Your order number is: </h1>
        <Button variant="primary" onClick={returnHome}>Return Home</Button></center ></div>

    )

};
export default CheckedOut;
