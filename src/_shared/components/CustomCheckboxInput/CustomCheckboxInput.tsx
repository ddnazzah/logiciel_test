/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 13:06:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-26 17:44:01
 */

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useField } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

interface Options {
	value: string;
	label: string;
}

interface CustomCheckboxInputProps {
	label: string;
	id: string;
	name: string;
	formControl: {};
	options: Array<Options>;
}

const CustomCheckboxInput: React.FC<CustomCheckboxInputProps> = ({ label, options, formControl, ...props }) => {
	const [field, meta] = useField({ name: props.name });

	return (
		<>
			<FormControl required error={!isEmpty(meta.touched && meta.error)} component='fieldset' {...formControl}>
				<FormLabel component='legend'>{label}</FormLabel>
				<FormGroup>
					{options?.map(({ label, value, ...optionsProps }) => (
						<FormControlLabel control={<Checkbox {...field} {...props} />} label={label} {...optionsProps} />
					))}
				</FormGroup>
				<FormHelperText>{meta?.error}</FormHelperText>
			</FormControl>
		</>
	);
};

export default CustomCheckboxInput;

const useStyles = makeStyles((theme: Theme) => createStyles({}));
