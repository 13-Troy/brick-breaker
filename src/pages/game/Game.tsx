import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import { MainGame } from './utils/game';
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const game = useMemo(() => new MainGame(GAME_WIDTH, GAME_HEIGHT), []);
  const lastTimeRef = useRef(0);

  const animate = useCallback(
    (timestamp = 0) => {
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      if (ctxRef.current) {
        ctxRef.current.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.start();
        game.update(deltaTime);
        game.draw(ctxRef.current);
      }
      requestAnimationFrame(animate);
    },
    [game]
  );

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx === null) throw new Error('Could not get context');
      ctxRef.current = ctx;
      requestAnimationFrame(animate);
    }
  }, [animate]);

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
