/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-07-27 02:19:47
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-28 04:05:26
 */

export interface TCPTrainer {
	trainer_id?: string;
	trainer_name: string;
	gender: 'Male' | 'Female' | string;
	telephone: string;
	email: string;
	digital_address: string;
	business_name: string;
	business_location: string;
	town: string;
	district: string;
	region: string;
	registered: 'Yes' | 'No' | string;
	registration_no: string;
	has_tin: 'Yes' | 'No' | string;
	tin_no: string;
	association_member: 'Yes' | 'No' | string;
	nvti_cert: 'Yes' | 'No' | string;
	rcvd_nbssi_support: 'Yes' | 'No' | string;
	want_nbssi_support: 'Yes' | 'No' | string;
	support_description: string;
	years_practicing: string;
	trained_apprentice: 'Yes' | 'No' | string;
	want_train_apprentice: 'Yes' | 'No' | string;
	no_apprentices: string;
	additional_support: string;
	createdon?: Date;
}

export interface Response {
	error?: any;
	data?: any;
}

export interface SetMessagePayloadProps {
	type?: 'success' | 'error';
	message: string;
}

export interface RootState {
	message: SetMessagePayloadProps;
}
