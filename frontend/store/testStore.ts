import { create } from 'zustand';

interface TestStore {
  currentIndex: number;
  moveToQuestion: (index: number) => void;
}

export const useTestStore = create<TestStore>((set) => ({
  currentIndex: 0,
  moveToQuestion: (index) =>
    set({ currentIndex: index }),
}));
