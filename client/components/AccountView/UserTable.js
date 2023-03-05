import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchAllUsers } from "../../slices/userSlice";
import Pagination from "../Pagination";
import Dropdown from "../Dropdown";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  // Get current posts
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItems = indexOfLastItems - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItems, indexOfLastItems);

  // Change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  console.log("users: ", users);
  return (
    <div className="userTable">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.role}</td>
                <td>{<Dropdown user={user} />}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
        paginate={paginate}
      />
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};
export default UserTable;
