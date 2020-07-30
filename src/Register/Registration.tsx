import { Box, Typography } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { runBasicErrorChecks } from '../_shared/services';
import { setMessage } from '../_shared/_redux/actions';
import BusinessInformation from './components/BusinessInformation';
import Confirmation from './components/Confirmation';
import PersonalInformation from './components/PersonalInformation';
import TrainingExperience from './components/TrainingExperience';
import { getFormData, step0Schema, step1Schema, step2Schema, storeSCPTrainer } from './_services';

const Registration: React.FC = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const [activeStep, setActiveStep] = useState<number>(2);

	const [loading, setLoading] = useState(true);

	const [formOptions, setFormOptions] = useState(null);

	const fetchData = async () => {
		const response: any = await getFormData();

		if (response.error) {
			const errorFormatted = runBasicErrorChecks(response.error);

			dispatch(setMessage({ message: errorFormatted, type: 'error' }));

			setLoading(false);
		}

		setFormOptions(response.data);

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const nextStep = () => {
		setActiveStep((activeStep) => activeStep + 1);
	};

	const prevStep = () => {
		setActiveStep((activeStep) => activeStep - 1);
	};

	const steps = ['Personal Information', 'Business Information', 'Training Experience', 'Confirmation'];

	return (
		<>
			{loading ? (
				<Backdrop className={classes.backdrop} open={true}>
					<CircularProgress color='inherit' />
				</Backdrop>
			) : (
				<Paper className={classes.root}>
					<Typography variant='h3' gutterBottom align='center'>
						{' '}
						National Board of Small Scale Industries Application Form
					</Typography>
					<Box m={5}>
						<Stepper activeStep={activeStep}>
							{steps.map((label, index) => {
								const stepProps: { completed?: boolean } = {};
								const labelProps: { optional?: React.ReactNode } = {};

								return (
									<Step key={label} {...stepProps}>
										<StepLabel {...labelProps}>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
					</Box>
					<Formik
						enableReinitialize
						initialValues={{
							// trainer_id: null,
							trainer_name: '',
							gender: 'Male',
							telephone: '',
							email: '',
							digital_address: '',
							business_name: '',
							business_location: '',
							town: '',
							district: '',
							region: '',
							registered: 'No',
							registration_no: '',
							has_tin: 'No',
							tin_no: '',
							association_member: 'No',
							nvti_cert: 'No',
							rcvd_nbssi_support: 'No',
							want_nbssi_support: 'No',
							support_description: '',
							years_practicing: '',
							trained_apprentice: 'No',
							want_train_apprentice: 'No',
							no_apprentices: '',
							additional_support: '',
							// createdon: '',
						}}
						validationSchema={activeStep === 0 ? step0Schema : activeStep === 1 ? step1Schema : step2Schema}
						onSubmit={async (values, { setSubmitting }) => {
							const data = { trainer_id: uuidv4(), ...values, createdon: new Date() };

							const response: any = await storeSCPTrainer(data);

							if (response.error) {
								const errorFormatted = runBasicErrorChecks(response.error, response.message);

								dispatch(setMessage({ message: errorFormatted, type: 'error' }));

								return setSubmitting(false);
							}

							dispatch(
								setMessage({
									message: 'Form submitted successfully',
								}),
							);

							setActiveStep(0);

							setSubmitting(false);
						}}
					>
						{({ values, isSubmitting, isValid, touched }) => (
							<Form autoComplete='false'>
								{activeStep === 0 ? (
									<PersonalInformation nextStep={nextStep} formOptions={formOptions} />
								) : activeStep === 1 ? (
									<BusinessInformation
										nextStep={nextStep}
										prevStep={prevStep}
										formOptions={formOptions}
										// values={values}
									/>
								) : activeStep === 2 ? (
									<TrainingExperience nextStep={nextStep} prevStep={prevStep} />
								) : activeStep === 3 ? (
									<Confirmation prevStep={prevStep} isSubmitting={isSubmitting} />
								) : null}
							</Form>
						)}
					</Formik>
				</Paper>
			)}
		</>
	);
};

export default Registration;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: theme.spacing(10),
			padding: theme.spacing(5),
		},
		logo: {
			height: 100,
			width: 100,
			borderRadius: 50,
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: theme.palette.primary.light,
			background: '#fff',
		},
	}),
);
