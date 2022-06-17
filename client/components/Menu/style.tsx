import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuSt = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.allColors.green};
`;

export const MenuContainerSt = styled.div`
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItemSt = styled.div``;

export const MenuLinkSt = styled(Link)`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.allColors.black};
`;
