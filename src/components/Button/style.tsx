import styled from 'styled-components';

interface ButtonStProps {
  fullWidth: boolean;
  backgroundColor: string;
  color: string;
}

export const ButtonSt = styled.button<ButtonStProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  background-color: ${({ theme }) => theme.colors.bgBtn};
  color: ${({ theme }) => theme.colors.fontBtn};
  border: none;
  border-radius: 6px;
  padding: 12px;
  text-transform: uppercase;
`;
