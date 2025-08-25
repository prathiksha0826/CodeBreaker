import React from 'react';

interface InstructionsProps {
  onBack: () => void;
}

export const Instructions: React.FC<InstructionsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 p-8">
      <button
        onClick={onBack}
        className="mb-8 text-white hover:text-indigo-300 transition-colors"
      >
        ← Back to Menu
      </button>
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white">
        <h2 className="text-3xl font-bold mb-8">How to Play</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Game Objective</h3>
            <p>
              Solve puzzles to unlock doors and progress through 100 challenging
              levels. Each level presents a unique door with different types of
              puzzles to solve.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-3">Puzzle Types</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Number sequences and patterns</li>
              <li>Memory challenges</li>
              <li>Logic puzzles</li>
              <li>Riddles and word games</li>
              <li>Visual pattern matching</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-3">Scoring System</h3>
            <p>
              Points are awarded based on:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Speed of completion</li>
              <li>Number of attempts</li>
              <li>Hint usage (fewer hints = more points)</li>
            </ul>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-3">Tips</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Take your time to observe all elements of each puzzle</li>
              <li>Use hints wisely - they're limited!</li>
              <li>Some puzzles may require combining multiple clues</li>
              <li>Your progress is automatically saved</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};