import React from 'react';
import { Play, Settings, HelpCircle, LogOut } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { useGameSounds } from '../hooks/useGameSounds';

interface MainMenuProps {
  onPlay: () => void;
  onSettings: () => void;
  onInstructions: () => void;
  onExit: () => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  onPlay,
  onSettings,
  onInstructions,
  onExit,
}) => {
  const score = useGameStore((state) => state.score);
  const { playClick } = useGameSounds();

  const handleClick = (action: () => void) => {
    playClick();
    action();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Door Puzzle
        </h1>
        <div className="text-center mb-8">
          <p className="text-xl text-yellow-300">Total Score: {score}</p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => handleClick(onPlay)}
            className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <Play size={24} />
            Play Game
          </button>
          <button
            onClick={() => handleClick(onSettings)}
            className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <Settings size={24} />
            Settings
          </button>
          <button
            onClick={() => handleClick(onInstructions)}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <HelpCircle size={24} />
            Instructions
          </button>
          <button
            onClick={() => handleClick(onExit)}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            <LogOut size={24} />
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};