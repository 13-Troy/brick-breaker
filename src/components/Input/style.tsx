import styled from 'styled-components';
import { borderRadius } from '../../styles/variables';

export const InputSt = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: ${borderRadius};
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;
