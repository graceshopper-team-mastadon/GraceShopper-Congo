const React = require("react");
import { ListGroup } from "react-bootstrap";
import Sidebar from "./Sidebar";

const UserProfile = () => {
    return (
        <div className="Userprofile">
            <div>
                <Sidebar />
            </div>
            <div className="Profile">
                <h1> Profile </h1><br />
                <ListGroup className="listGroup">
                    <ListGroup.Item>Personal Info</ListGroup.Item>
                    <ListGroup.Item>Birthday</ListGroup.Item>
                    <ListGroup.Item>Change Email</ListGroup.Item>
                    <ListGroup.Item>Phone Number</ListGroup.Item>
                    <ListGroup.Item>Phone Number</ListGroup.Item>
                    <ListGroup.Item>Password</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )

};
export default UserProfile;
