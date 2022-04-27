import React, { FC } from 'react';

import { H1St, H2St, H3St, H4St } from './style';

/**
 * В компонент передаются пропсы:
 * @param h - число, от 1 до 4, определяющее уровень заголовка
 */

interface TitleProps {
  h: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ h, children }) => {
  return (
    <>
      {h === 1 && <H1St>{children}</H1St>}
      {h === 2 && <H2St>{children}</H2St>}
      {h === 3 && <H3St>{children}</H3St>}
      {h === 4 && <H4St>{children}</H4St>}
    </>
  );
};

export default Title;
