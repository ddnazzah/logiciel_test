/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-04 19:07:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-25 19:29:05
 */

import { Constants } from './constants';

interface PayloadProps {
	message: string;
	type: 'success' | 'error';
}

interface ActionProps {
	type: string;
	payload: PayloadProps;
}

const INITIAL_STATE = { message: '', type: 'success' };

export default (state = INITIAL_STATE, action: ActionProps) => {
	switch (action.type) {
		case Constants.actions.MESSAGE:
			return action.payload;
		default:
			return state;
	}
};
