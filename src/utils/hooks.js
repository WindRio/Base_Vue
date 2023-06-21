import { ref } from "vue";

export const useLoading = () => {
  const isLoading = ref(false);

  const setLoading = (status) => {
    isLoading.value = status;
  };

  return {
    isLoading,
    setLoading,
  };
};

export const useModal = () => {
  const isVisible = ref(false);

  const showModal = () => (isVisible.value = true);

  const hideModal = () => (isVisible.value = false);

  return {
    isVisible,
    showModal,
    hideModal,
  };
};
