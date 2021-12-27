import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './store.js';
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from './App';
import './bootstrap.min.css';

const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
	transition: transitions.SCALE,
};

ReactDOM.render(
	<Provider store={store}>
		<AlertProvider template={AlertTemplate} {...options}>
			{/* <PersistGate persistor={persistor}> */}
			<App />
			{/* </PersistGate> */}
		</AlertProvider>
	</Provider>,
	document.getElementById('root')
);
