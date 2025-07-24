import { readonly, ref, type Ref } from 'vue';
type UseModalReturn = {
  isModalOpen: Readonly<Ref<boolean>>;
  openModal: () => void;
  closeModal: () => void;
};

export function useModal(): UseModalReturn {
  const isModalOpen = ref(false);

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  return {
    isModalOpen: readonly(isModalOpen),
    openModal,
    closeModal,
  };
}
