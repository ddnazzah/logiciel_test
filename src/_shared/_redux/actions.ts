/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-04 19:00:57
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 23:26:53
 */

import { SetMessagePayloadProps } from '../types';
import { Constants } from './constants';

interface LoadingPayloadProps {
	type: string;
	payload: boolean;
}

export const setLoading = (payload: LoadingPayloadProps) => ({
	type: Constants.actions.LOADING,
	payload,
});

export const setMessage = (payload: SetMessagePayloadProps) => ({
	type: Constants.actions.MESSAGE,
	payload,
});
