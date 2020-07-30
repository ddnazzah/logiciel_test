/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-03 20:36:02
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-26 13:04:36
 */

import { combineReducers } from 'redux';
import loadingReducer from './_shared/_redux/loadingReducer';
import messageReducer from './_shared/_redux/messageReducer';

export default combineReducers({
	loading: loadingReducer,
	message: messageReducer,
});
