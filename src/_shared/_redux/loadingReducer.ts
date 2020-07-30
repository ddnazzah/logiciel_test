/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-09 20:32:55
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-25 19:24:39
 */

import { Constants } from './constants';

interface ActionProps {
	type: string;
	payload: boolean;
}

export default (state = null, action: ActionProps) => {
	switch (action.type) {
		case Constants.actions.LOADING:
			return action.payload;
		default:
			return state;
	}
};
