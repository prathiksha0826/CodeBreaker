import React, { useState, useEffect } from 'react';
import { MainMenu } from './components/MainMenu';
import { LevelSelector } from './components/LevelSelector';
import { Settings } from './components/Settings';
import { Instructions } from './components/Instructions';
import { GameLevel } from './components/GameLevel';
import { useGameSounds } from './hooks/useGameSounds';

type Screen = 'menu' | 'levels' | 'settings' | 'instructions' | 'game';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('menu');
  const [selectedLevel, setSelectedLevel] = useState(1);
  const { playBackgroundMusic, stopBackgroundMusic } = useGameSounds();

  useEffect(() => {
    playBackgroundMusic();
    return () => stopBackgroundMusic();
  }, []);

  const handleExit = () => {
    if (confirm('Are you sure you want to exit the game?')) {
      window.close();
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return (
          <MainMenu
            onPlay={() => setCurrentScreen('levels')}
            onSettings={() => setCurrentScreen('settings')}
            onInstructions={() => setCurrentScreen('instructions')}
            onExit={handleExit}
          />
        );
      case 'levels':
        return (
          <LevelSelector
            onSelectLevel={(level) => {
              setSelectedLevel(level);
              setCurrentScreen('game');
            }}
            onBack={() => setCurrentScreen('menu')}
          />
        );
      case 'settings':
        return <Settings onBack={() => setCurrentScreen('menu')} />;
      case 'instructions':
        return <Instructions onBack={() => setCurrentScreen('menu')} />;
      case 'game':
        return (
          <GameLevel
            level={selectedLevel}
            onBack={() => setCurrentScreen('levels')}
            onComplete={() => {
              setSelectedLevel(prev => prev + 1);
              setCurrentScreen('levels');
            }}
          />
        );
      default:
        return null;
    }
  };

  return <div className="min-h-screen">{renderScreen()}</div>;
}

export default App;