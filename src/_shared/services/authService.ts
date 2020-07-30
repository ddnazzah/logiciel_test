/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-08 16:11:04
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 23:33:14
 */

import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { Constants } from '../Constants';
import { getFromLocalStorage } from './storageService';

export const getSecureAxiosInstance = () => {
	const instance = (token: string) => {
		return axios.create({
			baseURL: Constants.app.BASE_API_URL,
			headers: {
				// 'Content-Type': 'application/json',
				// Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	};

	const apiToken = getToken();

	return instance(apiToken);
};

export const getToken = () => {
	const auth = getFromLocalStorage(Constants.app.AUTH_USER);
	if (!isEmpty(auth) && !isEmpty(auth.auth_token)) return auth.auth_token;
	return null;
};
