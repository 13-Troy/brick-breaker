import styled from 'styled-components';

interface ButtonStProps {
  fullWidth: boolean;
}

const Button = styled.button<ButtonStProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #e0e7ff;
    color: #4338ca;
  }
`;

export default Button;
