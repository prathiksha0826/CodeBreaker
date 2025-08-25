import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GameState {
  currentLevel: number;
  unlockedLevels: number[];
  score: number;
  soundEnabled: boolean;
  musicEnabled: boolean;
  hintsEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  setMusicEnabled: (enabled: boolean) => void;
  setHintsEnabled: (enabled: boolean) => void;
  completeLevel: (level: number, score: number) => void;
  resetProgress: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      currentLevel: 1,
      unlockedLevels: [1],
      score: 0,
      soundEnabled: true,
      musicEnabled: true,
      hintsEnabled: true,
      setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
      setMusicEnabled: (enabled) => set({ musicEnabled: enabled }),
      setHintsEnabled: (enabled) => set({ hintsEnabled: enabled }),
      completeLevel: (level, score) =>
        set((state) => ({
          unlockedLevels: [...new Set([...state.unlockedLevels, level + 1])],
          score: state.score + score,
        })),
      resetProgress: () =>
        set({ currentLevel: 1, unlockedLevels: [1], score: 0 }),
    }),
    {
      name: 'door-puzzle-storage',
    }
  )
);