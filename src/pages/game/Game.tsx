import React, { useEffect, useRef } from 'react';

import { Game } from './utils/game';
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const GamePage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const game = useRef<Game>();

  useEffect(() => {
    if (canvasRef.current) {
      game.current = new Game({
        canvasElement: canvasRef.current,
        gameWidth: GAME_WIDTH,
        gameHeight: GAME_HEIGHT,
      });
      game.current?.drawInitialScreen();
    }
  }, []);

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
