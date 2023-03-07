const React = require("react");
import { ListGroup } from "react-bootstrap";
import Sidebar from "./Sidebar";
const axios = require("axios");
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../slices/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getId = async () => {
      if (await axios.get('/auth/verify')) {
        const { data } = await axios.get('/auth/getId');
        setId(data)
      } else {
        setId(false)
      }
    };
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/user");
      setUsername(data.username);
      setEmail(data.email);
      setPassword(data.password);
      setAddress(data.address);
      setIsAdmin(data.role);
    };
    getId();
    adminStatus();
  }, []);


  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(updateUser({ id, username, email, password, address }))
  }

  function Toggle() {
    const temp = document.getElementById("typepass");
    if (temp.type === "password") {
      temp.type = "text";
    }
    else {
      temp.type = "password";
    }
  }

  return (
    <div className="Userprofile">
      <div>
        <Sidebar />
      </div>
      <div className="Profile">
        <h1> Profile </h1>
        <br></br>
        <form>
          <ListGroup className="listGroup">
            <ListGroup.Item>
              Personal Info <br></br>
              Name: This will be the actual name of the User Id{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              <label htmlFor="username"> Username: </label>
              <input
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <label htmlFor="email"> Email: </label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                value={password}
                id="typepass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="checkbox"
                onClick={() => Toggle()} />
              <strong>Show Password</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <label htmlFor="address"> Address: </label>
              <input
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </ListGroup.Item>
            {isAdmin === "MEMBER" ? (<><ListGroup.Item>
              Status: MEMBER </ListGroup.Item></>) : (<><ListGroup.Item> Status: ADMIN
              </ListGroup.Item></>)}
            <button type="edit" onClick={handleEdit}>
              Save Changes
            </button>
          </ListGroup>
        </form>
      </div>
    </div>
  );
};
export default UserProfile;
