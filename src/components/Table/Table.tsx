import React, { FC } from 'react';

import {
  TableSt,
  TableHeadSt,
  TableBodySt,
  TableRowSt,
  TableColSt,
} from './style';

interface T {
  id: number;
  user_id: number;
  time: string;
  content: string;
}

interface ContentTableProps {
  id: number;
  name: string;
  user_id: number;
  user_name: string;
  answer_count: number;
  content: string;
  answers: Array<T>;
}

interface TableProps {
  titles: Array<string>;
  content: Array<ContentTableProps>;
}

const Table: FC<TableProps> = ({ titles, content }) => {
  const tableHead = (
    <TableHeadSt>
      <TableRowSt>
        {titles &&
          titles.map((title, i) => <TableColSt key={i}>{title}</TableColSt>)}
      </TableRowSt>
    </TableHeadSt>
  );

  const tableBody = (
    <TableBodySt>
      {content &&
        content.map((item, i) => (
          <TableRowSt key={i}>
            <TableColSt>{item.name}</TableColSt>
            <TableColSt>{item.user_name}</TableColSt>
            <TableColSt>{item.answer_count}</TableColSt>
            <TableColSt>edit</TableColSt>
          </TableRowSt>
        ))}
    </TableBodySt>
  );

  return (
    <TableSt>
      {tableHead}
      {tableBody}
    </TableSt>
  );
};

export default Table;
