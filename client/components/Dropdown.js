import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSingleUser } from "../slices/userSlice";
import { deleteSingleProduct } from "../slices/productsSlice";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";

const TableDropdown = (props) => {
  const { item } = props;
  const deleteId = item.id;
  //   const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  //   const handleOpen = () => {
  //     setOpen(!open);
  //   };

  const deleteHandler = async (id) => {
    console.log("deleteHandler will delete this item id: ", id);
    if (item.role) {
      await dispatch(deleteSingleUser(id));
    } else if (item.category) {
      await dispatch(deleteSingleProduct(id));
    }
  };

  return (
    <div>
      <DropdownButton title="">
        <Dropdown.Item href={`/dashboard/items/edit/${item.id}`}>
          Edit
        </Dropdown.Item>

        <Dropdown.Item>
          <Button variant="danger" onClick={() => deleteHandler(deleteId)}>
            Delete
          </Button>
        </Dropdown.Item>
      </DropdownButton>
    </div>

    // <div className="dropdown">
    //   <button onClick={handleOpen}>Dropdown</button>
    //   {open ? (
    //     <ul className="menu">
    //       {/* <Link to={`/dashboard/users/edit/${user.id}`}> */}
    //       <li className="menu-item">
    //         <button>Edit</button>
    //       </li>
    //       {/* </Link> */}
    //       <li className="menu-item">
    //         <button onClick={deleteHandler(user.id)}>Delete</button>
    //       </li>
    //     </ul>
    //   ) : null}
    //   {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    // </div>
  );
};

export default TableDropdown;
