/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-27 01:05:26
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 02:47:04
 */
import * as Yup from 'yup';

export interface Validation {
	errors: {};
	touched: {};
}

let step0Schema = Yup.object().shape({
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

let step1Schema = Yup.object().shape({
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
});

let step2Schema = Yup.object().shape({
	trained_apprentice: Yup.string().required('Field is required'),
	want_train_apprentice: Yup.string().required('Field is required'),
	no_apprentices: Yup.number().positive().integer().required('Field is required'),
	additional_support: Yup.string().min(5, 'Must be 5 characters or more').max(500, 'Must be 500 characters or less'),
});

export const stageCompleted = (stage: number, values: any): boolean => {
	switch (stage) {
		case 0:
			step0Schema.isValid(values).then((valid) => {
				console.log(valid);

				return valid;
			});
		case 1:
			step1Schema.isValid(values).then((valid) => {
				return valid;
			});
		case 2:
			step2Schema.isValid(values).then((valid) => {
				return valid;
			});
		default:
			return false;
	}
};
