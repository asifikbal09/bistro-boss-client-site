import React from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const ManegeItem = () => {
  const [menu] = useMenu();
  const handleItemDelete=(id)=>{
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete(`http://localhost:5000/menu/${id}`)
        .then(data =>{
            if(data.data.deletedCount == 1){
                Swal.fire(
                    'Deleted!',
                    'Your Item has been deleted by Admin.',
                    'success'
                  )
            }
        })
  }
})
  }
  return (
    <div>
      <SectionTitle heading={"Manege Items"}></SectionTitle>
      <h3 className="text-3xl uppercase">Total Item :{menu?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>Recipe Image</th>
              <th>Recipe Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-ghost text-white hover:text-white bg-[#D1A054]">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button onClick={()=>handleItemDelete(item._id)} className="btn btn-ghost text-white hover:bg-red-400 bg-red-600">
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

export default ManegeItem;
