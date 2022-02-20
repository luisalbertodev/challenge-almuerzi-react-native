export const buildEndpoint = ({ path, func, queryParams = "" }) => {
	const endpoint = `${path}${func}${queryParams}`;
	return endpoint;
};

export const fetchService = async (params = {}) => {
	const { method = "GET", body, isTypeJson = true, ...rest } = params;
	const url = buildEndpoint(rest);

	const headers = {
		"Content-Type": "application/json",
		...(rest.headers || {}),
	};

	const settings = {
		headers,
		method,
		body: JSON.stringify(body),
	};

	const fetching = await fetch(url, settings);
	const response = await (isTypeJson ? fetching.json() : fetching.text());
	return response;
};
