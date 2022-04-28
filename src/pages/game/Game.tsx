import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Paddle } from './utils/paddle';
import { InputHandler } from './utils/input';
import { Ball } from './utils/ball';
import ballImg from '../../assets/img/ball.png';
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const paddle = useMemo(() => new Paddle(GAME_WIDTH, GAME_HEIGHT), []);
  const ball = useMemo(() => new Ball(), []);
  const lastTimeRef = useRef(0);

  const [image, setImage] = useState<any | null>(null);

  const animate = useCallback(
    (timestamp = 0) => {
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      if (ctxRef.current) {
        ctxRef.current.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        paddle.update(deltaTime);
        paddle.draw(ctxRef.current);
        ball.draw(ctxRef.current);
      }
      requestAnimationFrame(animate);
    },
    [paddle, ball]
  );
  useEffect(() => {
    const ballImage = new Image();
    ballImage.width = 10;
    ballImage.height = 10;
    ballImage.src = ballImg;
    setImage(ballImage);
  }, []);

  useEffect(() => {
    new InputHandler(paddle);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx === null) throw new Error('Could not get context');
      ctxRef.current = ctx;
      // paddle.draw(ctx);
      animate();
    }
  }, [paddle, animate, image]);

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
