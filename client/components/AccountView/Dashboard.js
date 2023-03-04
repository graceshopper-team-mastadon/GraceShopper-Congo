import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = async () => {
      const { data } = await axios.get("/api/users/checkadmin");
      setIsAdmin(data);
    };
    adminStatus();
  }, []);

  return (
    <>
      {!isAdmin && (
        <>
          <p>
            You do not have permission to view Admin Dashboard. Please log in as
            Admin to gain access.
          </p>
        </>
      )}
      {isAdmin && (
        <>
          <div>
            <h1> You are Admin and this is your Admin Dashboard! </h1>
          </div>
        </>
      )}
    </>
  );
};
export default Dashboard;
