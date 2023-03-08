const React = require("react");
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const CheckedOut = () => {
  const navigate = useNavigate();

  const random = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);

  const returnHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <center>
        {" "}
        <h1>
          Congrats you've been checked out! Your order number is: {random}
        </h1>
        <Button variant="primary" onClick={returnHome}>
          Return Home
        </Button>
      </center>
    </div>
  );
};
export default CheckedOut;
