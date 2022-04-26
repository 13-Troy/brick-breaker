import styled from 'styled-components';

interface ButtonStProps {
  fullWidth: boolean;
  backgroundColor: string;
  color: string;
}

export const ButtonSt = styled.button<ButtonStProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#4F46E5'};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  border: none;
  border-radius: 6px;
  padding: 12px;
  text-transform: uppercase;
`;
