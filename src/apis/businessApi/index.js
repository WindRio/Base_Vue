import { fetchApi } from "../apiFactory";
import { BUSSINESS } from "../constants";

const { GET_DATA } = BUSSINESS;

export const businessApi = () => {
  const getApi = async (params) => {
    // TODO: use transform here
    return await fetchApi(GET_DATA, params);
  };

  return {
    getApi,
  };
};
