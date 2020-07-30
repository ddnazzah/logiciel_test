import { getSecureAxiosInstance, processErrorResponse } from '.';

export const apiPost = async (url: string, data: {}, description: string, returnDataExpected: boolean = false) => {
	try {
		const axiosSecure = getSecureAxiosInstance();
		const response = await axiosSecure.post(url, data);
		if (returnDataExpected) return { data: response.data.data };
		return { success: true };
	} catch (err) {
		return processErrorResponse(err, description);
	}
};

export const apiGet = async (url: string, description: string) => {
	try {
		const axiosSecure = getSecureAxiosInstance();
		const response = await axiosSecure.get(url);
		return { data: response.data.data };
	} catch (err) {
		return processErrorResponse(err, description);
	}
};

export const apiPut = async (url: string, data: {}, description: string, returnDataExpected: boolean = false) => {
	try {
		const axiosSecure = getSecureAxiosInstance();
		const response = await axiosSecure.put(url, data);
		if (returnDataExpected) return { data: response.data.data };
		return response;
	} catch (err) {
		return processErrorResponse(err, description);
	}
};

export const apiDelete = async (url: string, description: string, returnDataExpected: boolean = false) => {
	try {
		const axiosSecure = getSecureAxiosInstance();
		const response = await axiosSecure.delete(url);
		if (returnDataExpected) return { data: response.data.data };
		return { success: true };
	} catch (err) {
		return processErrorResponse(err, description);
	}
};
