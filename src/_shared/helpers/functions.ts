/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2019-03-26 11:42:42
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 03:17:55
 */

/**
 *
 * @param {object} arrayOfObject
 */

export const sortArrayOfObjectByName = (arrayOfObject: Array<any>) => {
	return arrayOfObject.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
};
