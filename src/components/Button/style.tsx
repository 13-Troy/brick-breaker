import styled from 'styled-components';
interface ButtonStProps {
  fullWidth: boolean;
}

const Button = styled.button<ButtonStProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-color: ${({ theme }) => theme.colors.bgBtn};
  color: ${({ theme }) => theme.colors.fontBtn};
  font-weight: ${({ theme }) => theme.fonts.black};
  font-size: 14px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px;
  cursor: pointer;
  transition: ${({ theme }) => theme.skillsStartAnim} all;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgBtnHover};
    color: ${({ theme }) => theme.colors.fontBtnHover};
  }
`;

export default Button;
