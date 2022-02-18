import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMedicineDetails, clearErrors } from "../../actions/medicineActions";
import { useAlert } from "react-alert";
import { useNavigate, useParams, Link } from "react-router-dom";
import { addMedToCart } from "../../actions/cartActions.js";

const Medicine = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const params = useParams();

  const { medicine, loading, error } = useSelector(
    (state) => state.medicineDetails
  );
  const [quantity, setQuantity] = useState(1);

  const medId = params.id;

  const increaseQuantity = () => {
    // TODO if (medicine.stockDetails === null) return;
    if (medicine.stockDetails[0].inStock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToListHandler = () => {
    dispatch(addMedToCart(medId, quantity));
    alert.success("Medicine added to cart");
    navigate("/cart");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getMedicineDetails(medId));
  }, [error, alert, dispatch, medId]);

  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{medicine.name}</h1>
          <p>{medicine.composition}</p>
          <Link to={`/stock/${medId}`}>Stocks</Link>
          <div>
            <Link to={`/newstock/${medicine._id}`}>New Stock+</Link>
          </div>
          <div className="detailsBlock-3-1-1">
            <button onClick={decreaseQuantity}>-</button>
            <input readOnly type="number" value={quantity} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button
            // disabled={medicine.stockDetails[0].inStock < 1 ? true : false}
            onClick={addToListHandler}
          >
            Add to Cart
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Medicine;
