/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 15:32:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 03:41:00
 */

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { CustomRadioInput, CustomTextInput } from '../../../_shared/components/';

interface PersonalPersonalInformationProps {
	nextStep: () => void;
	formOptions: {
		regions: Array<any>;
		gender: Array<any>;
	} | null;
}

const PersonalInformation: React.FC<PersonalPersonalInformationProps> = ({ nextStep, formOptions }) => {
	const { touched, isValid } = useFormikContext();

	return (
		<>
			<Grid container spacing={3}>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='trainer_name'
						label='Full Name'
						name='trainer_name'
						type='text'
						placeholder='Full name'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='gender'
						label='Gender'
						name='gender'
						options={[
							{ label: 'Male', value: 'Male' },
							{ label: 'Female', value: 'Female' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='telephone'
						label='Telephone No.'
						name='telephone'
						type='text'
						placeholder='Telephone No.'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='email'
						label='Email'
						name='email'
						type='email'
						placeholder='Email'
						variant='outlined'
						margin='dense'
						fullWidth
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='digital_address'
						label='Digital Address'
						name='digital_address'
						type='digital_address'
						placeholder='Digital Address'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item xs={12}>
					<Box display='flex' justifyContent='flex-end'>
						<Button color='primary' variant='contained' onClick={nextStep} disabled={isEmpty(touched) || !isValid}>
							Next
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default PersonalInformation;
