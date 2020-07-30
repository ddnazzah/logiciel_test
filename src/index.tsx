import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { createStore } from 'redux';
import { App } from './App';
import allReducers from './combineReducers';
import './index.css';
import * as serviceWorker from './serviceWorker';
import theme from './_shared/theme';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={createStore(allReducers)}>
			<ThemeProvider theme={theme}>
				<ToastProvider autoDismiss={false}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<App />
				</ToastProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
