/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 13:06:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-26 23:57:40
 */

import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { useField } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

interface CustomTextInputProps extends OutlinedTextFieldProps {
	label: string;
	id: string;
	name: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ label, ...props }) => {
	const [field, meta] = useField({ name: props.name });

	return (
		<>
			<TextField
				error={!isEmpty(meta.touched && meta.error)}
				label={label}
				helperText={meta.touched && meta?.error}
				{...field}
				{...props}
			/>
		</>
	);
};

export default CustomTextInput;
