import { defineStore } from "pinia";
import { ref } from "vue";

import { businessApi } from "@/apis";
import { LIMIT } from "@/utils/constants";

export const useStore = defineStore("businessName", () => {
  const state = ref("");

  const getData = async (params) => {
    const { getApi } = businessApi();
    return await getApi({
      page: 1,
      limit: LIMIT,
      ...params,
    });
  };

  return {
    state,
    getData,
  };
});
