import React, { FC } from 'react';

import { ButtonSt } from './style';

/**
 * В компонент передаются пропсы:
 * value - строка, опредлеяющая текст кнопки
 * fullWidth - булев:
 *   true - ширина кнопки будет 100%
 *   false - ширина - auto
 * backgroundColor - строка, определяет цвет кнопки
 *   backgroundColor={"#ff0000"} - кнопка получает указанный цвет
 *   false - цвет кнопки по умолчанию
 * color - строка, аналогично backgroundColor для цвета текста
 */

interface ButtonProps {
  value: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  color?: string;
}

const Button: FC<ButtonProps> = ({
  value,
  fullWidth,
  backgroundColor,
  color,
}) => {
  return (
    <>
      <ButtonSt
        fullWidth={fullWidth ?? false}
        backgroundColor={backgroundColor ?? ''}
        color={color ?? ''}
      >
        {value}
      </ButtonSt>
    </>
  );
};

export default Button;
