import React, { FC } from 'react';

import { ButtonSt } from './style';

/**
 * В компонент передаются пропсы:
 * @param fullWidth - булев:
 *   true - ширина кнопки будет 100%
 *   false - ширина - auto
 */

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ children, fullWidth = false }) => {
  return <ButtonSt fullWidth={fullWidth}>{children}</ButtonSt>;
};

export default Button;
