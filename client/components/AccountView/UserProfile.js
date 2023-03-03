const React = require("react");
import { ListGroup } from "react-bootstrap";
import Sidebar from "./Sidebar";
const axios = require("axios");

//need to get the user by id

const UserProfile = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const allCookies = document.cookie;
    // const id = await User.getId(allCookies.token)

    // console.log('where ma id andrew?', id)

    // useEffect(() => {
    //     setUsername(username || "");
    //     setEmail(email || "");
    //     setPassword(password || "");
    //     setAddress(address || "");
    // }, []);

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log('work in progress yall')
        // await dispatch(updateUser({ id, username, email, password, address }))
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
                        <ListGroup.Item>Personal Info <br></br>
                            Name: This will be the actual name of the User Id </ListGroup.Item>
                        <ListGroup.Item>
                            <label htmlFor="username"> Username: </label>
                            <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <button type="edit" onClick={handleEdit}> Edit </button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <label htmlFor="email"> Email: </label>
                            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="edit" onClick={handleEdit}> Edit </button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <label htmlFor="password"> Password: </label>
                            <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="edit" onClick={handleEdit}> Edit </button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <label htmlFor="address"> Address: </label>
                            <input name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <button type="edit" onClick={handleEdit}> Edit </button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Status: This will be the actual status of the user
                        </ListGroup.Item>
                    </ListGroup>
                </form>
            </div>
        </div>
    )

};
export default UserProfile;
