/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 15:32:16
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 00:15:53
 */

import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { CustomRadioInput, CustomTextInput } from '../../../_shared/components';

interface ConfirmationProps {
	prevStep: () => void;
	isSubmitting: boolean;
}

const Confirmation: React.FC<ConfirmationProps> = ({ prevStep, isSubmitting }) => {
	const classes = useStyles();

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
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='gender'
						label='Gender'
						name='gender'
						options={[
							{ label: 'Male', value: 'Male', disabled: true },
							{ label: 'Female', value: 'Female', disabled: true },
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
						InputProps={{
							readOnly: true,
						}}
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
						required
						InputProps={{
							readOnly: true,
						}}
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
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
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
						InputProps={{
							readOnly: true,
						}}
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
						InputProps={{
							readOnly: true,
						}}
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
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='district'
						label='District:'
						name='district'
						type='text'
						placeholder='District:'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='region'
						label='Region:'
						name='region'
						type='text'
						placeholder='Region:'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='registered'
						label='Is your business registered'
						name='registered'
						options={[
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
						required
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='has_tin'
						label='Do you have a business TIN number'
						name='has_tin'
						options={[
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
						required
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='association_member'
						label='Are you a member of a trade association in your locality?'
						name='association_member'
						options={[
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='tin_no'
						label='If yes, what kind of support would you need from NBSSI'
						name='tin_no'
						type='text'
						placeholder='If yes, what kind of support would you need from NBSSI'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						InputProps={{
							readOnly: true,
						}}
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
						required
						InputProps={{
							readOnly: true,
						}}
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
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomRadioInput
						id='trained_apprentice'
						label='Have you trained apprentices before?'
						name='trained_apprentice'
						options={[
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
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
							{ label: 'Yes', value: 'Yes', disabled: true },
							{ label: 'No', value: 'No', disabled: true },
						]}
						row
					/>
				</Grid>
				<Grid item md={6} xs={12}>
					<CustomTextInput
						id='no_apprentices'
						label='How many apprentices can you take on at a time?'
						name='no_apprentices'
						type='number'
						placeholder='How many apprentices can you take on at a time?'
						variant='outlined'
						margin='dense'
						fullWidth
						required
						InputProps={{
							readOnly: true,
						}}
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
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<Box display='flex' justifyContent='space-between'>
						<Button color='inherit' variant='contained' onClick={() => prevStep()}>
							Back
						</Button>
						<Button color='primary' variant='contained' type='submit'>
							Submit
						</Button>
					</Box>
				</Grid>
				<Backdrop className={classes.backdrop} open={isSubmitting}>
					<CircularProgress color='inherit' />
				</Backdrop>
			</Grid>
		</>
	);
};

export default Confirmation;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.tooltip + 1,
			color: theme.palette.primary.light,
		},
	}),
);
