import styled from 'styled-components';

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
