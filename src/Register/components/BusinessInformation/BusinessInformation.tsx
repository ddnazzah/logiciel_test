/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 15:32:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 03:53:20
 */

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CustomRadioInput, CustomSelectInput, CustomTextInput } from '../../../_shared/components/';
import { runBasicErrorChecks } from '../../../_shared/services';
import { Response, TCPTrainer } from '../../../_shared/types';
import { setMessage } from '../../../_shared/_redux/actions';
import { getDistricts } from '../../_services';

interface BusinessInformationProps {
	nextStep: () => void;
	prevStep: () => void;
	formOptions: {
		regions: Array<any>;
		gender: Array<any>;
	} | null;
}

const BusinessInformation: React.FC<BusinessInformationProps> = ({ nextStep, prevStep, formOptions }) => {
	const [districts, setDistricts] = useState([]);

	const { values, touched, isValid } = useFormikContext<TCPTrainer>();

	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		const response: Response = await getDistricts('123');

		if (response.error) {
			const errorFormatted = runBasicErrorChecks(response.error);

			dispatch(setMessage({ message: errorFormatted, type: 'error' }));

			setLoading(false);
		}

		setDistricts(response.data);

		setLoading(false);
	};

	useEffect(() => {
		(values?.region as any) && fetchData();
	}, [values.region]);

	return (
		<>
			<Grid container spacing={3}>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='business_name'
						label='Business Name'
						name='business_name'
						type='text'
						placeholder='Business Name'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='business_location'
						label='Location of Business'
						name='business_location'
						type='text'
						placeholder='Location of Business'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomSelectInput
						id='region'
						label='Region'
						name='region'
						variant='outlined'
						fullWidth
						margin='dense'
						required
						autoComplete='false'
						options={[
							{ label: 'Greater Accra', value: 'Greater Accra' },
							{ label: 'Upper West', value: 'Upper West' },
						]}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='town'
						label='Town'
						name='town'
						type='text'
						placeholder='Town'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomSelectInput
						id='district'
						label={loading ? 'Loading Districts' : 'District'}
						name='district'
						type='text'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						autoComplete='false'
						options={[
							{ label: 'Test District', value: 'Test District' },
							{ label: 'Test District 2', value: 'Test District 2' },
						]}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='registered'
						label='Is your business registered'
						name='registered'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>

				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='registration_no'
						label='If yes, state your registration number'
						name='registration_no'
						type='text'
						placeholder='If yes, state your registration number'
						variant='outlined'
						margin='dense'
						fullWidth
						autoComplete='false'
						disabled={values.registered === 'No'}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='has_tin'
						label='Do you have a business TIN number'
						name='has_tin'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='tin_no'
						label='If yes, state your business TIN number'
						name='tin_no'
						type='text'
						placeholder='If yes, state your business TIN number'
						variant='outlined'
						margin='dense'
						fullWidth
						autoComplete='false'
						disabled={values.has_tin === 'No'}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='association_member'
						label='Are you a member of a trade association in your locality?'
						name='association_member'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='nvti_cert'
						label='Do you have NVTI certification?'
						name='nvti_cert'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='rcvd_nbssi_support'
						label='Have you received any support from NBSSI?'
						name='rcvd_nbssi_support'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='want_nbssi_support'
						label='If no, would you want to receive support from NBSSI'
						name='want_nbssi_support'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='support_description'
						label='If yes, what kind of support would you need from NBSSI'
						name='support_description'
						type='text'
						placeholder='If yes, what kind of support would you need from NBSSI'
						variant='outlined'
						margin='dense'
						fullWidth
						disabled={values.want_nbssi_support === 'No'}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='years_practicing'
						label='How many years have you been a Skilled Craft Person'
						name='years_practicing'
						type='text'
						placeholder='How many years have you been a Skilled Craft Person'
						variant='outlined'
						margin='dense'
						fullWidth
						required
					/>
				</Grid>
				<Grid item xs={12}>
					<Box display='flex' justifyContent='space-between'>
						<Button color='inherit' variant='contained' onClick={prevStep}>
							Back
						</Button>
						<Button color='primary' variant='contained' onClick={nextStep} disabled={isEmpty(touched) || !isValid}>
							Next
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default BusinessInformation;
