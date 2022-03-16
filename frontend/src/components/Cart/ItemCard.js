import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";

const ItemCard = ({ med, deleteItemFromList }) => {
  return (
    <div>
      <div className="cart_medicine_head">
        <Link className="cart_medicine" to={`/medicine/${med.medicine}`}>
          {med.name}
        </Link>
      </div>
      <div className="cart_med_info">
        <span className="cart_factors">
          {`Price: ${med.price * med.qty}`} <br />
          {`Qty: ${med.qty}`}
        </span>
        <div className="cart_del_head">
          <button
            className="cart_delete"
            onClick={() => deleteItemFromList(med._id)}
          >
            Delete
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
