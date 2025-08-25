import React from 'react';
import { Volume2, Music, Lightbulb } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { useGameSounds } from '../hooks/useGameSounds';

interface SettingsProps {
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const {
    soundEnabled,
    musicEnabled,
    hintsEnabled,
    setSoundEnabled,
    setMusicEnabled,
    setHintsEnabled,
    resetProgress,
  } = useGameStore();
  const { playClick } = useGameSounds();

  const handleToggle = (action: (value: boolean) => void, value: boolean) => {
    playClick();
    action(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 p-8">
      <button
        onClick={onBack}
        className="mb-8 text-white hover:text-indigo-300 transition-colors"
      >
        ← Back to Menu
      </button>
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8">Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Volume2 size={24} />
              <span>Sound Effects</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => handleToggle(setSoundEnabled, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Music size={24} />
              <span>Background Music</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={musicEnabled}
                onChange={(e) => handleToggle(setMusicEnabled, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Lightbulb size={24} />
              <span>Hints</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={hintsEnabled}
                onChange={(e) => handleToggle(setHintsEnabled, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <button
            onClick={() => {
              playClick();
              if (confirm('Are you sure you want to reset all progress?')) {
                resetProgress();
              }
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg mt-8"
          >
            Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
};