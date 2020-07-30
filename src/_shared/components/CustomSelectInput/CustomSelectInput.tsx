/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 13:06:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 01:29:21
 */

import { InputBaseComponentProps, MenuItem, Theme } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Select, { SelectProps } from '@material-ui/core/Select';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useField } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

interface Options {
	value: string;
	label: string;
}

interface CustomSelectInputProps extends SelectProps {
	label: string;
	id: string;
	name: string;
	options: Array<Options> | null | undefined;
	formControl?: {};
	inputProps?: InputBaseComponentProps;
}

const CustomSelectInput: React.FC<CustomSelectInputProps> = ({ label, options, inputProps, formControl, ...props }) => {
	const [field, meta] = useField({ name: props.name });

	const classes = useStyles();

	return (
		<>
			<FormControl
				className={classes.formControl}
				variant='outlined'
				fullWidth
				error={!isEmpty(meta.touched && meta.error)}
				{...formControl}
			>
				<InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
				<Select label={label} {...field} {...props}>
					{options?.map(({ label, value, ...optionsProps }) => (
						<MenuItem value={value} key={value}>
							{label}
						</MenuItem>
					))}
				</Select>
				<FormHelperText>{meta.touched && meta?.error}</FormHelperText>
			</FormControl>
		</>
	);
};

export default CustomSelectInput;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			marginTop: theme.spacing(1),
		},
	}),
);
