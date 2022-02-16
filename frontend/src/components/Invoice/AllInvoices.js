import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { getAllInvoices } from '../../actions/invoiceActions';

const AllInvoices = () => {

	const dispatch = useDispatch();
	const alert = useAlert();

	const { error, invoices } = useSelector((state) => state.allInvoices);

	const all_Invoices = invoices.invoices;

	useEffect(() => {
		if (error) {
			alert.error(error);
		}
		dispatch(getAllInvoices());
	}, [error, alert, dispatch]);

	return (
		<Fragment>
			<h1>All Invoices</h1>
			{
				all_Invoices && all_Invoices.map((invoice) => (
					<div key={invoice._id}>
						<Link to={`/invoice/${invoice._id}`}>Invoice ID: {invoice._id}</Link>
					</div>
				))
			}
		</Fragment>
	)
};

export default AllInvoices;
