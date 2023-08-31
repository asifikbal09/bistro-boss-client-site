import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const token = localStorage.getItem("access-token");
  const { data: users, refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users/", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an Admin now.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  return (
    <div>
      <div className="my-3">
        <h3 className="text-3xl uppercase">Total User :{users?.length}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/*className="dropdown dropdown-right"*/}
                  <button
                    onClick={() => handleAdmin(user)}
                    className="btn btn-ghost text-white hover:text-slate-600 bg-[#D1A054]"
                  >
                    {user.role == "admin" ? "admin" : <FaUsers></FaUsers>}
                  </button>
                  {/* <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul> */}
                </td>
                <td>
                  <button className="btn btn-ghost text-white hover:text-slate-600 bg-red-600">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
