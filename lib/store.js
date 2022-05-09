import create from "zustand";

const useStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));

export default useStore;
