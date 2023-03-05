import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { deleteSingleUser } from "";

const Dropdown = (props) => {
  const { user } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const deleteHandler = async (id) => {
    await dispatchEvent(deleteSingleUser(id));
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <Link to={`/dashboard/users/edit/${user.id}`}>
              <button>Edit</button>
            </Link>
          </li>
          <li className="menu-item">
            <button onCLick={deleteHandler(user.id)}>Delete</button>
          </li>
        </ul>
      ) : null}
      {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
  );
};

export default Dropdown;
