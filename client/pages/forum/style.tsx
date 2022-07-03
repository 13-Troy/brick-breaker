import styled from 'styled-components';

export const WrapperSt = styled.div`
  width: 700px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const ButtonWrapperSt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: 40px;
`;

export const ButtonInnerSt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
  button{
    margin: 0;
  }
`;

export const TopicBodySt = styled.div`
  background: ${({ theme }) => theme.allColors.white};
  margin-top: auto;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.allColors.blue};
  transition: ${({ theme }) => theme.skillsStartAnim} all;
  padding: 10px;
  cursor: pointer;
  h3, h2, h4 {
    text-align: initial; 
    margin-bottom: 0;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.allColors.purple_light};
  }
`;

export const RowSt = styled.div`
  display:flex
`;
