import styled from 'styled-components';
import { borderRadius, fonts } from '../../styles/variables';

export const InputSt = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: ${borderRadius};
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  font-size: 12px;
  font-weight: ${fonts.semi_bold};
`;
