import axiosInstance from "../../utils/axios";
import constants from "../../utils/constants";

// ==================== Laptop =================
export const get_newspaper = async () => {
    const response = await axiosInstance.get(constants.API_NEWSPAPER);
    return response;
}

export const get_newspaper_by_id = async (id) => {
    const response = await axiosInstance.get(`${constants.API_NEWSPAPER_BY_ID}/${id}/detail`);
    return response;
}