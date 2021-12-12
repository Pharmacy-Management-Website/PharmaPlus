const express = require('express');
const router = express.Router();
const {
	getAllInvoices,
	newInvoice,
	getInvoiceById,
	deleteInvoice
} = require('../controllers/invoiceController');

// ? GET All invoices
router.get('/all-invoice', getAllInvoices);

// ? POST Add new invoice
router.post('/new-invoice', newInvoice);

// ? GET Invoice by id
router.get('/invoice/:id', getInvoiceById);

// ? DELETE Invoice
router.delete('/invoice/:id', deleteInvoice);

module.exports = router;
