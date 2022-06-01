import React, { useEffect, useRef, useState } from 'react';

import Button from '../../components/Button';
import { Game } from './utils/game';
import { toggleFullscreen } from '../../services/fullscreen-api';
import { WrapperSt } from './style';

import { useToggle } from '../../hooks/useToggle';

import { mediaMuted } from '../../services/media-api';

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const GamePage = () => {
  const [toggler, setTogglerScreen] = useToggle(false);
  const [isMuted, setTogglerSound] = useToggle(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const game = useRef<Game>();
  const [gameScore, setGameScore] = useState(0);

  const gameScoreHandler = (score: number) => setGameScore(score);

  useEffect(() => {
    if (canvasRef.current) {
      game.current = new Game({
        canvasElement: canvasRef.current,
        gameWidth: GAME_WIDTH,
        gameHeight: GAME_HEIGHT,
        gameScoreHandler,
      });
      game.current?.drawInitialScreen();
    }
  }, []);

  const handleToggleFullscreen = () => {
    toggleFullscreen();
    setTogglerScreen();
  };

  const handleMuted = () => {
    setTogglerSound();
    mediaMuted(isMuted);
  };

  useEffect(() => {
    if (gameScore > 0) {
      console.log('total game score', gameScore);
    }
  }, [gameScore]);

  return (
    <WrapperSt>
      <Button onClick={handleMuted}>
        {isMuted ? 'выкл звук' : 'вкл звук'}
      </Button>
      <Button id="toggler" onClick={handleToggleFullscreen}>
        {toggler ? 'toggle off' : 'toggle on'}
      </Button>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ background: '#663399' }}
      />
    </WrapperSt>
  );
};

export default GamePage;
