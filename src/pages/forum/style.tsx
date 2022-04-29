import styled from 'styled-components';

export const WrapperSt = styled.div`
  width: 700px;
  margin: 40px auto;
  background: #fff;
  display: flex;
  flex-direction: column;

  min-height: 500px;
`;

export const TableSt = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
`;

export const TableHeadSt = styled.thead`
  border: none;
  border-bottom: 1px solid #f2f8f8;
`;

export const TableBodySt = styled.tbody``;

export const TableRowSt = styled.tr`
  &:nth-child(even) {
    background: #f7f7f7;
  }
  &:nth-child(odd) {
    background: #fff;
  }
`;

export const TableColSt = styled.td`
  padding: 5px 10px;
  width: 150px;
`;

export const ButtonWrapperSt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: 40px;
`;
