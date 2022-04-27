import React, { FC } from 'react';
import Title from '../../components/Title';

import { BackdropSt, WrapperSt, ModalSt } from './style';

interface ModalProps {
  isShown?: boolean;
  hide?: () => void;
  children?: React.ReactNode;
  headerText?: string;
}

const Modal: FC<ModalProps> = ({ isShown, hide, children, headerText }) => {
  return (
    <>
      {isShown ? (
        <>
          <BackdropSt onClick={hide} />
          <WrapperSt>
            <ModalSt>
              <Title h={4}>{headerText}</Title>
              {children}
            </ModalSt>
          </WrapperSt>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Modal;
