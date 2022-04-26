import React, { FC } from 'react';

import { ButtonSt } from './style';

/**
 * В компонент передаются пропсы:
 * value - строка, опредлеяющая текст кнопки
 * fullWidth - булев:
 *   true - ширина кнопки будет 100%
 *   false - ширина - auto
 */

interface ButtonProps {
  value: string;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ value, fullWidth }) => {
  return (
    <>
      <ButtonSt fullWidth={fullWidth ?? false}>{value}</ButtonSt>
    </>
  );
};

export default Button;
