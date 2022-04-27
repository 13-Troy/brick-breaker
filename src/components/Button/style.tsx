import styled from 'styled-components';
import { fonts, borderRadius, skillsStartAnim } from '../../styles/variables';

interface ButtonStProps {
  fullWidth: boolean;
}

const Button = styled.button<ButtonStProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-color: ${({ theme }) => theme.colors.bgBtn};
  color: ${({ theme }) => theme.colors.fontBtn};
  font-weight: ${fonts.black};
  font-size: 14px;
  border: none;
  border-radius: ${borderRadius};
  padding: 10px;
  cursor: pointer;
  transition: ${skillsStartAnim} all;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgBtnHover};
    color: ${({ theme }) => theme.colors.fontBtnHover};
  }
`;

export default Button;
