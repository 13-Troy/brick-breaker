import React, { useEffect, useRef, useState } from 'react';

import Button from '../../components/Button';

import { Game } from './utils/game';
import { toggleFullscreen } from '../../services/fullscreen-api';
import { WrapperSt } from './style';

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const GamePage = () => {
  const [toggler, setToggler] = useState(false);
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
    setToggler(!toggler);
  };

  useEffect(() => {
    if (gameScore > 0) {
      console.log('total game score', gameScore);
    }
  }, [gameScore]);

  return (
    <WrapperSt>
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
