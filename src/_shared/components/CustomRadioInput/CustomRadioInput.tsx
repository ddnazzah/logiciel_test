/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 13:06:32
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 01:25:36
 */

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useField } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

interface Options {
	value: string;
	label: string;
	disabled?: boolean;
}

interface CustomRadioInputProps extends RadioGroupProps {
	label: string;
	id: string;
	name: string;
	options: Array<Options> | null | undefined;
	formControl?: {};
}

const CustomRadioInput: React.FC<CustomRadioInputProps> = ({ label, options, formControl, ...props }) => {
	const [field, meta] = useField({ name: props.name });

	return (
		<>
			<FormControl component='fieldset' {...formControl} error={!isEmpty(meta.touched && meta.error)}>
				<FormLabel component='legend'>{label}</FormLabel>
				<RadioGroup {...field} {...props}>
					{options?.map(({ label, value, ...optionsProps }, index) => (
						<FormControlLabel key={index} value={value} control={<Radio />} label={label} {...optionsProps} />
					))}
				</RadioGroup>
				<FormHelperText>{meta.touched && meta?.error}</FormHelperText>
			</FormControl>
		</>
	);
};

export default CustomRadioInput;

const useStyles = makeStyles((theme) => createStyles({}));
