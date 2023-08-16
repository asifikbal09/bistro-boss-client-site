import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
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
          <button className="btn btn-primary">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
