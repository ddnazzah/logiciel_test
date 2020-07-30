/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-11-18 17:04:17
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 02:59:29
 */

import { Constants } from '../Constants';

/**
 * An unknown error is one that should ideally never happen.
 * E.g. will be there when there is a 500/400/etc.
 * Returned from the server, or when a database operation fails
 */
export function processUnknownError(error: any, response: any) {
	if (response && response.status === 401)
		return {
			error: Constants.errors.UNAUTHORIZED,
			status: response ? response.status : null,
		};
	if (response && response.status === 403)
		return {
			error: Constants.errors.FORBIDDEN,
			status: response ? response.status : null,
		};
	if (response && response.status === 422)
		return {
			error: Constants.errors.UNPROCESSABLE_ENTITY,
			status: response ? response.status : null,
			message: response ? response.data.errors[Object.keys(response.data.errors)[0]][0] : null,
		};
	if (response && response.status === 503)
		return {
			error: Constants.errors.TOO_MANY_REQUEST,
			status: response ? response.status : null,
		};
	return {
		error: Constants.errors.GENERIC_ERROR,
		status: response ? response.status : null,
	};
}

/**
 * Get the error response.
 *
 * In most cases, errors that occur when communicating with the API are handled in the same way,
 * this utility function can be used for that.
 * @param {Object} error
 */
export function processErrorResponse(error: any, errorDescription: string) {
	console.log(error, errorDescription, error.response);

	return error.message && (error.message.indexOf('Network Error') !== -1 || error.message.indexOf('timeout') !== -1)
		? { error: Constants.errors.NO_INTERNET_CONNECTION }
		: processUnknownError(error, error.response);
}

export function runBasicErrorChecks(e: string, message?: string) {
	if (e === Constants.errors.UNAUTHORIZED) return 'Authentication failed!';
	if (e === Constants.errors.FORBIDDEN) return "You don't the privileges to perform this action!";
	else if (e === Constants.errors.UNPROCESSABLE_ENTITY) return message || 'Invalid Form Data. Please check your form data.';
	else if (e === Constants.errors.NO_INTERNET_CONNECTION) return 'No Connection. Please check your internet connection!';
	else if (e === Constants.errors.TOO_MANY_REQUEST) return 'Too many request to the server. Please wait a while and try again.';
	else if (e === Constants.errors.GENERIC_ERROR) return 'Something went wrong. Please try again later!';
	else return 'Unknown server error. Please try again later!';
}
