/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-06 21:08:17
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 04:54:31
 */

export const Constants = {
	errors: {
		NO_INTERNET_CONNECTION: 'no_internet',
		GENERIC_ERROR: 'generic_error',
		TOO_MANY_REQUEST: 'too_many_request',
		UNAUTHORIZED: 'unauthorized',
		FORBIDDEN: 'forbidden',
		UNPROCESSABLE_ENTITY: 'unprocessable_entity',
	},
	app: {
		AUTH_USER: 'aud',
		// BASE_API_URL: 'http://127.0.0.1:8000/api/',
		BASE_API_URL: 'http://test.nbssiyoungafricaworks.com:8081/',
		APP_KEY: 'eZ8E7E1jT10V0wd2mCn41YIaQIieKi1uS2NOaYrnM',
		CIPHER_KEY: ' Fg7EZ/RRa0Y=',
	},
	apiUrls: {
		SCP_TRAINER: 'webresources/scp/wapp/scptrainer',
		REGIONS: 'webresources/region/wapp/regions',
		GENDER: 'webresources/dropdown/wapp/dropdowns/gender',
		DISTRICTS_BY_REGION_CODE: (region_code: string) => `webresources/district/wapp/districts/${region_code}`,
	},
	store: {},
	routes: {
		REGISTER: '/register',
		NOT_FOUND: '/not-found',
	},
};
