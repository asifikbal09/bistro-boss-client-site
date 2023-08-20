import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCards from "../../Hooks/useCards";

const FoodCard = ({item}) => {
    const {name, image, price, recipe,_id} = item;
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    const [,refetch]=useCards()


    const handleAddToCard =item =>{
      if(user&&user.email){
        const cardItem = {menuItemId:_id, image,name,price, email:user.email}
        fetch('http://localhost:5000/cards', {
          method: "POST",
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(cardItem)
        })
        .then(res =>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Successfully added the item.',
              showConfirmButton: false,
              timer: 2000
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Pleas login',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login')
          }
        })
      }
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=''
        />
      </figure>
      <p className="bg-slate-800 absolute right-0 mr-4 mt-6 px-4 py-1 rounded-xl font-semibold text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleAddToCard(item)} className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
