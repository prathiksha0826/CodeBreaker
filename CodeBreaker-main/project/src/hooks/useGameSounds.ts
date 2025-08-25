import { Howl } from 'howler';
import { useGameStore } from '../store/gameStore';
import { useEffect } from 'react';

// Sound effects
const sounds = {
  click: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'],
    volume: 0.5,
    preload: true,
    html5: true,
  }),
  success: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'],
    volume: 0.5,
    preload: true,
    html5: true,
  }),
  unlock: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/500/500-preview.mp3'],
    volume: 0.7,
    preload: true,
    html5: true,
  }),
  wrong: new Howl({
    src: ['https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3'],
    volume: 0.5,
    preload: true,
    html5: true,
  }),
};

// Background music
const backgroundMusic = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/1150/1150-preview.mp3'],
  volume: 0.3,
  loop: true,
  preload: true,
  html5: true,
});

export const useGameSounds = () => {
  const { soundEnabled, musicEnabled } = useGameStore();

  // Handle background music based on settings
  useEffect(() => {
    if (musicEnabled) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
    return () => {
      backgroundMusic.pause();
    };
  }, [musicEnabled]);

  const playClick = () => {
    if (soundEnabled) {
      sounds.click.play();
    }
  };

  const playSuccess = () => {
    if (soundEnabled) {
      sounds.success.play();
    }
  };

  const playUnlock = () => {
    if (soundEnabled) {
      sounds.unlock.play();
    }
  };

  const playWrong = () => {
    if (soundEnabled) {
      sounds.wrong.play();
    }
  };

  const playBackgroundMusic = () => {
    if (musicEnabled) {
      backgroundMusic.play();
    }
  };

  const stopBackgroundMusic = () => {
    backgroundMusic.pause();
  };

  return {
    playClick,
    playSuccess,
    playUnlock,
    playWrong,
    playBackgroundMusic,
    stopBackgroundMusic,
  };
};

// Initialize sounds
Object.values(sounds).forEach(sound => sound.load());
backgroundMusic.load();