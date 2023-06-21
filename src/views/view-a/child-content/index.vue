<template>
  <data-table
    :size="TABLE_SIZE.medium"
    :data="{ dataSource: demoData, totalElement: 10 }"
    :columns="columns"
    :on-get-data="handleGetData"
    :on-pagination="handlePagination"
  />
</template>

<script setup>
import { useStore } from "@/stores";
import { TABLE_SIZE } from "@/utils/constants";

import { demoData, columns } from "./data";

const { getData } = useStore();

const handleGetData = async (params) => {
  try {
    await getData(params);
    // alert success
  } catch (e) {
    // alert error message
  }
};

const handlePagination = async (val) => await handleGetData(val);
</script>
