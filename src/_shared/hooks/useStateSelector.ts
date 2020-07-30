/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-27 23:18:52
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-27 23:24:08
 */

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
