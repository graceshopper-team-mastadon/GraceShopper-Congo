const React = require("react");
import { ListGroup } from "react-bootstrap";
import Sidebar from "./Sidebar";
const axios = require("axios");

//need to get the user by id

const UserProfile = () => {

    return (
        <div className="Userprofile">
            <div>
                <Sidebar />
            </div>
            <div className="Profile">
                <h1> Profile </h1><br />
                <ListGroup className="listGroup">
                    <ListGroup.Item>Personal Info <br></br>
                        Name: </ListGroup.Item>
                    <ListGroup.Item>Username </ListGroup.Item>
                    <ListGroup.Item>Email </ListGroup.Item>
                    <ListGroup.Item>Password </ListGroup.Item>
                    <ListGroup.Item>Address </ListGroup.Item>
                    <ListGroup.Item>Status </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )

};
export default UserProfile;
