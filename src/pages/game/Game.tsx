import React, { useEffect, useRef, useState } from 'react';

import { Game } from './utils/game';
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const GamePage = () => {
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

  useEffect(() => {
    if (gameScore > 0) {
      console.log('total game score', gameScore);
    }
  }, [gameScore]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ outline: '1px solid red' }}
    />
  );
};

export default GamePage;
