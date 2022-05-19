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

  useEffect(() => {
    if (canvasRef.current) {
      game.current = new Game({
        canvasElement: canvasRef.current,
        gameWidth: GAME_WIDTH,
        gameHeight: GAME_HEIGHT,
      });
      game.current?.start();
    }
  }, []);

  const handleToggleFullscreen = () => {
    toggleFullscreen();
    setToggler(!toggler);
  };

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
