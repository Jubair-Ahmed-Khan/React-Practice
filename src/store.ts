import { create } from "zustand";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { getAllSets } from "./service/pokemon.service";
import { useEffect } from "react";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

type SetListStore = {
  sets: Set[];
  loading: boolean;
  error: any;
  fetchData: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: Math.max(0, state.count - 1) }));
  },
  reset: () => {
    set({ count: 0 });
  },
}));

// export const useSetListStore = create<SetListStore>((set)=>{
//   sets: [],
// })

export const useSetListStore = create<SetListStore>((set) => ({
  sets: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await getAllSets();

      console.log("Store response == ", response);
      set({ sets: response, loading: false });
    } catch (err) {
      console.error("Error fetching data:", err);
      set({ loading: false, error: err });
    }
  },
}));
