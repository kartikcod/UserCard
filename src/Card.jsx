import React from "react";

function Card({ name, age, image}) {
  return (
    <div className="card-container border mx-auto text-center p-24" >
      <h1 className="text-red-400">{name}</h1>
      <p className="text-center">{age}</p>
      <img src={image} className="w-25 mx-auto" alt="" />
    </div>
  );
}

export default Card;
