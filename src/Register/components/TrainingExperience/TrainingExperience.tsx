/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 15:32:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 05:14:22
 */

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { CustomRadioInput, CustomTextInput } from '../../../_shared/components/';

interface TrainingExperienceProps {
	nextStep: () => void;
	prevStep: () => void;
}

const TrainingExperience: React.FC<TrainingExperienceProps> = ({ nextStep, prevStep }) => {
	const { touched, isValid } = useFormikContext();

	return (
		<>
			<Grid container spacing={3}>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='trained_apprentice'
						label='Have you trained apprentices before?'
						name='trained_apprentice'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>

				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='want_train_apprentice'
						label='If no, would you like to train apprentices'
						name='want_train_apprentice'
						options={[
							{ label: 'Yes', value: 'Yes' },
							{ label: 'No', value: 'No' },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='no_apprentices'
						label='How many apprentices can you take on at a time?'
						name='no_apprentices'
						type='text'
						placeholder='How many apprentices can you take on at a time?'
						variant='outlined'
						margin='dense'
						fullWidth
						required
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='additional_support'
						label='What additional support would you need from NBSSI to be able to train apprentices'
						name='additional_support'
						type='text'
						placeholder='What additional support would you need from NBSSI to be able to train apprentices'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						multiline
						rows={3}
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

export default TrainingExperience;
