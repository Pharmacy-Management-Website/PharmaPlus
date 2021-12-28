import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {

	const [keyword, setKeyword] = useState("");
	const navigate = useNavigate();

	const searchHandler = (e) => {
		e.preventDefault();
		if (keyword.trim() !== "") {
			navigate(`/medicines/${keyword}`);
		}
		else {
			navigate("/medicines");
		}
	};

	return (
		<Fragment>
			<form className="searchBox" onSubmit={searchHandler}>
				<input
					type="text"
					placeholder="Search..."
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
		</Fragment>
	)
}

export default SearchBox;

