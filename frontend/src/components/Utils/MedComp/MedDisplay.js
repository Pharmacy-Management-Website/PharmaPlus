import React from 'react';
import { Link } from 'react-router-dom';

const MedDisplay = ({ medicine }) => {
	return (
		<Link to={`/medicine/${medicine._id}`}>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{medicine.name}</h5>
					{/* <p className="card-text">{medicine.description}</p> */}
				</div>
			</div>
		</Link>
	)
}

export default MedDisplay
