import React, { useEffect, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { getInvoiceDetails } from '../../actions/invoiceActions';

const InvoiceDetails = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const params = useParams();

	const { error, invoice } = useSelector((state) => state.invoiceDetails);

	const invId = params.id;

	useEffect(() => {
		if (error) {
			alert.error(error);
		}
		dispatch(getInvoiceDetails(invId));
	}, [error, alert, dispatch, invId]);

	return (
		<div>InvoiceDetails</div>
	)
};

export default InvoiceDetails;
