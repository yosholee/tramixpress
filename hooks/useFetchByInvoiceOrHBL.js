import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const production_URL = "https://tracking.ctenvios.com/api/v1";
const dev_url = "https://tracking.ctenvios.com/api/v1";
axios.defaults.baseURL = process.env.NODE_ENV === "production" ? production_URL : dev_url;
const apiKey = "c3VwYmFzZWNyZXQ=";
axios.defaults.headers.common = { "api-key": apiKey };

const getProductData = async (id) => {
	const trimedId = id.trim();
	if (
		!trimedId ||
		trimedId === "" ||
		trimedId === null ||
		trimedId === undefined ||
		trimedId.length < 3
	)
		return [];
	if (id.endsWith("CTE") || id.endsWith("cte")) {
		id = id.slice(0, -3);
	}
	//scalp id
	if (trimedId.length >= 4 && trimedId.length < 7) {
		const response = await axios.get(`parcels/invoice/${trimedId}`);
		
		return response.data;
	} else {
		const response = await axios.get(`parcels/hbl/${trimedId}`);
		return response.data;
	}
};

export const useFetchByInvoiceOrHBL = (id) => {
	return useQuery({
		queryKey: ["fetchProductByHBL", id],
		queryFn: () => getProductData(id),

		staleTime: 1000 * 60 * 5,
	});
};
