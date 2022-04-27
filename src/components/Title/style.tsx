import styled, { css } from 'styled-components';
import { fonts } from '../../styles/variables';

const titleSt = css`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.font};
  font-weight: ${fonts.black};
`;

export const H1St = styled.h1`
  ${titleSt}
`;

export const H2St = styled.h2`
  ${titleSt}
`;

export const H3St = styled.h3`
  ${titleSt}
`;

export const H4St = styled.h4`
  ${titleSt}
`;
