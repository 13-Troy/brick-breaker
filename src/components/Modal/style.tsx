import styled from 'styled-components';

export const WrapperSt = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  max-width: 384px;
  height: min-content;
`;

export const BackdropSt = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const ModalSt = styled.div`
  z-index: 100;
  background: ${({ theme }) => theme.allColors.white};
  position: relative;
  margin: auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 380px;
  min-height: 100px;
  padding: 40px;
`;
