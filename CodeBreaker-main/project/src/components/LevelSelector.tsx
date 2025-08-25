import React from 'react';
import { Lock, Unlock } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

interface LevelSelectorProps {
  onSelectLevel: (level: number) => void;
  onBack: () => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  onSelectLevel,
  onBack,
}) => {
  const unlockedLevels = useGameStore((state) => state.unlockedLevels);
  const totalLevels = 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 p-8">
      <button
        onClick={onBack}
        className="mb-8 text-white hover:text-indigo-300 transition-colors"
      >
        ← Back to Menu
      </button>
      <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
        {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => (
          <button
            key={level}
            onClick={() => unlockedLevels.includes(level) && onSelectLevel(level)}
            className={`aspect-square rounded-lg flex items-center justify-center transition-all transform hover:scale-105 ${
              unlockedLevels.includes(level)
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-700 cursor-not-allowed'
            }`}
          >
            <div className="text-center">
              <div className="mb-2">
                {unlockedLevels.includes(level) ? (
                  <Unlock className="mx-auto" size={24} />
                ) : (
                  <Lock className="mx-auto" size={24} />
                )}
              </div>
              <span className="text-sm">Level {level}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};