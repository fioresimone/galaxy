import create from "zustand";

export const usePosition = create((set) => ({
  position: [0, 0, 0],
  setPosition: (position) => set({ position }),
}));

export const useActive = create((set) => ({
  active: null,
  setActive: (active) => set({ active }),
}));

export const useControls = create((set) => ({
  controls: false,
  setControls: (controls) => set({ controls }),
}));

export const useStart = create((set) => ({
  start: false,
  setStart: (start) => set({ start }),
}));
