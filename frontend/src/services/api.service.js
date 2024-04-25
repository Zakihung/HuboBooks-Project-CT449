import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application",
    },
};

export default (baseURL) => {
    const api = axios.create({
		baseURL,
		...commonConfig,
	});

	return api;

};
