import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img
          className="card-img circle-img"
          src={props.image}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p>{props.number}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
