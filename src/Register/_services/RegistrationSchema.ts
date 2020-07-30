/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-26 15:42:30
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 05:15:33
 */

import * as Yup from 'yup';

export default Yup.object({
	trainer_name: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	gender: Yup.string().required('Required'),
	telephone: Yup.string().required('Field is required'),
	email: Yup.string().email(),
	digital_address: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	business_name: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	business_location: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	town: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	district: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
	region: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
	registered: Yup.string().required('Field is required'),
	registration_no: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	has_tin: Yup.string().required('Field is required'),
	tin_no: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	association_member: Yup.string().required('Field is required'),
	nvti_cert: Yup.string().required('Field is required'),
	rcvd_nbssi_support: Yup.string().required('Field is required'),
	want_nbssi_support: Yup.string().required('Field is required'),
	support_description: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	years_practicing: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
	trained_apprentice: Yup.string().required('Field is required'),
	want_train_apprentice: Yup.string().required('Field is required'),
	no_apprentices: Yup.number().positive().integer().required('Field is required'),
	additional_support: Yup.string().min(5, 'Must be 5 characters or more').max(500, 'Must be 500 characters or less'),
});

export const step0Schema = Yup.object().shape({
	trainer_name: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	gender: Yup.string().required('Required'),
	telephone: Yup.string().required('Field is required'),
	email: Yup.string().email(),
	digital_address: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
});

export const step1Schema = Yup.object().shape({
	business_name: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	business_location: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	town: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.required('Field is required'),
	district: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
	region: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
	registered: Yup.string().required('Field is required'),
	registration_no: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.when('registered', {
			is: 'Yes', // alternatively: (val) => val == true
			then: Yup.string().required('Field is required'),
			otherwise: Yup.string(),
		}),
	has_tin: Yup.string().required('Field is required'),
	tin_no: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.when('has_tin', {
			is: 'Yes', // alternatively: (val) => val == true
			then: Yup.string().required('Field is required'),
			otherwise: Yup.string(),
		}),
	association_member: Yup.string().required('Field is required'),
	nvti_cert: Yup.string().required('Field is required'),
	rcvd_nbssi_support: Yup.string().required('Field is required'),
	want_nbssi_support: Yup.string().required('Field is required'),
	support_description: Yup.string()
		.min(5, 'Must be 5 characters or more')
		.max(255, 'Must be 255 characters or less')
		.when('want_nbssi_support', {
			is: 'Yes', // alternatively: (val) => val == true
			then: Yup.string().required('Field is required'),
			otherwise: Yup.string(),
		}),
	years_practicing: Yup.string().max(255, 'Must be 255 characters or less').required('Field is required'),
});

export const step2Schema = Yup.object().shape({
	trained_apprentice: Yup.string().required('Field is required'),
	want_train_apprentice: Yup.string().required('Field is required'),
	no_apprentices: Yup.number().min(0, 'Cannot be less than 0').integer('Data must be an integer').required('Field is required'),
	additional_support: Yup.string().min(5, 'Must be 5 characters or more').max(500, 'Must be 500 characters or less'),
});
