import { createBrowserHistory } from 'history';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import '../App.css';
import { NotFound as NotFoundView } from '../NotFound';
import { Registration as RegistrationView } from '../Register';
import { RouteWithLayout } from '../_shared/components';
import { Constants } from '../_shared/Constants';
import { useTypedSelector } from '../_shared/hooks/useStateSelector';
import { MainLayout } from '../_shared/layouts';
import { setMessage } from '../_shared/_redux/actions';
var CryptoJS = require('crypto-js');

const App: React.FC = () => {
	// var data = [
	// 	{ id: 1, name: 'Anil' },
	// 	{ id: 2, name: 'Sunil' },
	// ];

	// // // Encrypt
	// // var ciphertext = CryptoJS.DES.encrypt(
	// // 	'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',
	// // 	'Fg7EZ/RRa0Y=',
	// // ).toString();
	// // //log encrypted data
	// // console.log('Encrypt Data -');
	// // console.log(ciphertext);

	// Decrypt
	// var bytes = CryptoJS.DES.decrypt(
	// 	'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',
	// 	'Fg7EZ/RRa0Y=',
	// );
	// console.log(bytes.toString(CryptoJS.enc.utf8));

	// try {
	// 	var decryptedData = JSON.parse(bytes.words);
	// } catch (error) {
	// 	console.log(error, 'eror');
	// }

	//log decrypted Data
	// console.log('decrypted Data -');
	// console.log(decryptedData);

	const browserHistory = createBrowserHistory();

	const dispatch = useDispatch();

	const { addToast } = useToasts();

	const message = useTypedSelector((state) => state.message);

	const renderMessage = () => {
		if (!isEmpty(message.message)) {
			addToast(message.message, {
				appearance: message.type || 'success',
				autoDismiss: true,
			});

			dispatch(setMessage({ message: '' }));

			return;
		}
	};

	useEffect(() => {
		renderMessage();
	}, [message]);

	return (
		<Router>
			<Switch>
				<Redirect exact from='/' to={Constants.routes.REGISTER} />
				<RouteWithLayout component={RegistrationView} exact layout={MainLayout} path={Constants.routes.REGISTER} />
				<RouteWithLayout component={NotFoundView} exact layout={MainLayout} path={Constants.routes.NOT_FOUND} />
				<Redirect to={Constants.routes.NOT_FOUND} />
			</Switch>
		</Router>
	);
};

export default App;
