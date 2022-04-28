import styled from 'styled-components';
import { allColors } from '../../styles/variables';

const ButtonSettings = styled.button`
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: ${allColors.white};
  font-size: 12px;
  background: none;
  border: none;
  border-bottom: 1px solid ${allColors.white};
  cursor: pointer;
`;

export default ButtonSettings;
