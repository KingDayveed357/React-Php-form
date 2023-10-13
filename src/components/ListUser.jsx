import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ListUser.css"
const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    try {
      const response = await axios.get("http://localhost:80/api/user");
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getUsers();
    }, 2000); // 2000 milliseconds (2 seconds)

    // Cleanup the timeout if the component unmounts before it completes
    return () => clearTimeout(timeout);
  }, []);

  function deleteUsers(id) {
    axios
      .delete(`http://localhost:80/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch(function (error) {
        console.error("Error deleting user:", error);
      });
  }

  return (
    <>
      <div className="text-center">
        <p>List User</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td className="">
                    <Link to={`user/${user.id}/edit`} className="edit">Edit</Link>
                    <button onClick={() => deleteUsers(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ListUser;
