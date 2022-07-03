import styled from 'styled-components';

export const WrapperSt = styled.div`
  width: 700px;
  margin: 40px auto;
  h4 {
    text-align: initial;
  }
`;

export const HeaderSt = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostBodySt = styled.div`
  margin-bottom: 80px;
`;

export const TextSt = styled.div`
  font-size: 14px;
`;

export const CommentsBlockSt = styled.div`
  border-top: 1px solid ${({ theme }) => theme.allColors.purple_light};
  padding: 20px;
`;

export const CommentBlockSt = styled.div`
  margin-bottom: 20px;
`;
