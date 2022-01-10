import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ med, deleteItemFromList }) => {
	return (
		<div>
			<Link to={`/medicine/${med.medicine}`}>{med.name}</Link>
			<span>
				{`Price: ${med.price * med.qty}`}
				{`Qty: ${med.qty}`}
			</span>
			<button onClick={() => deleteItemFromList(med._id)}>Delete</button>
		</div>
	)
};

export default ItemCard;

