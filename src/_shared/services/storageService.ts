/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-02 18:09:23
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 03:36:58
 */

import { Constants } from '../Constants';

const encryptor = require('simple-encryptor')(Constants.app.APP_KEY);

export const saveToLocalStorage = (key: string, value: any) => {
	const stringifiedValue = JSON.stringify(value);
	const encryptedValue = encryptor.encrypt(stringifiedValue);
	localStorage.setItem(key, encryptedValue);
};

export const getFromLocalStorage = (key: string) => {
	const encryptedValue = localStorage.getItem(key);

	const decryptedValue = encryptor.decrypt(encryptedValue);

	return JSON.parse(decryptedValue);
};
