import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { MainGame } from './utils/game';
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const game = useMemo(() => new MainGame(GAME_WIDTH, GAME_HEIGHT), []);

  const animate = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

      game.update();
      game.draw(ctxRef.current);
    }
    requestAnimationFrame(animate);
  }, [game]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx === null) throw new Error('Could not get context');

      ctxRef.current = ctx;
      game.start();
      requestAnimationFrame(animate);
    }
  }, [animate, game]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ outline: '1px solid red' }}
    />
  );
};

export default Game;
