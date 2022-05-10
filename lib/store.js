import create from "zustand";

const useStore = create((set) => ({
  selected: "btc",
  setSelected: (selected) => set({ selected }),
}));

export default useStore;
