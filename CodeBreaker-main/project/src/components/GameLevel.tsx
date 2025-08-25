import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useGameStore } from '../store/gameStore';
import { Timer, HelpCircle } from 'lucide-react';
import { levels } from '../data/puzzles';
import { useGameSounds } from '../hooks/useGameSounds';

interface GameLevelProps {
  level: number;
  onBack: () => void;
  onComplete: () => void;
}

export const GameLevel: React.FC<GameLevelProps> = ({
  level,
  onBack,
  onComplete,
}) => {
  const [answer, setAnswer] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [showHint, setShowHint] = useState(false);
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const { hintsEnabled, completeLevel } = useGameStore();
  const { playSuccess, playUnlock, playWrong } = useGameSounds();

  const puzzle = levels[level - 1];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    if (answer.toString().toLowerCase() === puzzle.answer.toString().toLowerCase()) {
      setShowSuccess(true);
      setIsDoorOpen(true);
      playSuccess();
      setTimeout(() => {
        playUnlock();
      }, 500);
      completeLevel(level, Math.max(timeLeft * 10, 100));
      setTimeout(() => {
        setShowSuccess(false);
        setIsDoorOpen(false);
        onComplete();
      }, 3000);
    } else {
      playWrong();
      setAnswer('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 p-8">
      {showSuccess && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
        </>
      )}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onBack}
            className="text-white hover:text-indigo-300 transition-colors"
          >
            ← Back to Levels
          </button>
          <div className="flex items-center gap-4 text-white">
            <Timer size={24} />
            <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Level {level}</h2>
          <div className="space-y-6">
            <div className="door-container">
              <div className={`door ${isDoorOpen ? 'door-open' : ''}`}>
                <p className="text-xl text-white mb-4">{puzzle.question}</p>
                {showSuccess && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-green-400">
                      Success!
                    </div>
                  </div>
                )}
              </div>
            </div>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your answer"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <div className="flex justify-between">
              {hintsEnabled && (
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors"
                >
                  <HelpCircle size={20} />
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
              )}
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Submit Answer
              </button>
            </div>
            {showHint && (
              <p className="text-yellow-300 mt-4">Hint: {puzzle.hint}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};