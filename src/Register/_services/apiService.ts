/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-03-03 03:37:26
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 01:55:17
 */

import { Constants } from '../../_shared/Constants';
import { apiGet, apiPost, processErrorResponse } from '../../_shared/services';
import { TCPTrainer } from '../../_shared/types';
var CryptoJS = require('crypto-js');

export const storeSCPTrainer = async (data: TCPTrainer) => {
	const url = `${Constants.apiUrls.SCP_TRAINER}`;

	const encryptedData = CryptoJS.DES.encrypt(JSON.stringify(data), Constants.app.CIPHER_KEY).toString();
	console.log(encryptedData);

	return await apiPost(url, encryptedData, 'create a tcp trainer', true);
};

export const getFormData = async () => {
	const getRegions = () => {
		return apiGet(Constants.apiUrls.REGIONS, 'get all regions');
	};
	const getGender = () => {
		return apiGet(Constants.apiUrls.GENDER, 'get all gender');
	};

	try {
		const response = await Promise.all([getRegions(), getGender()]);
		console.log(response);

		return { regions: response[0], gender: response[1] };
	} catch (err) {
		console.log(err, 'ggggggggggggggggggggggg');

		return processErrorResponse(err, 'form data');
	}
};

export const getDistricts = async (regionCode: string) => {
	const url = `${Constants.apiUrls.DISTRICTS_BY_REGION_CODE(regionCode)}`;

	return await apiGet(url, 'get district by region id');
};
