import styled from 'styled-components';
import { Link as LinkSC } from 'react-router-dom';

export const Link = styled(LinkSC)`
  display: block;
  text-align: center;
  margin-bottom: 24px;
  color: #4f46e5;
  &:hover {
    color: #ff0000;
  }
`;

export default Link;
