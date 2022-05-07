import React, { FC } from 'react';
import Button from '../Button';
import TableHead from '../TableHead';
import { useNavigate } from 'react-router-dom';

import { TableSt, TableBodySt, TableRowSt, TableColSt } from './style';

interface TableProps {
  colNames: string[];
  content: Array<Record<string, string>>;
}

const Table: FC<TableProps> = ({ colNames, content }) => {
  const navigate = useNavigate();

  const tableRow = Object.values(content).map((obj, i) => (
    <TableRowSt key={i}>
      {Object.keys(obj)
        .filter((key) => key !== 'id')
        .map((key, index) => (
          <TableColSt key={index}>{obj[key]}</TableColSt>
        ))}
      <TableColSt>
        <Button onClick={() => navigate(`${content[i].id}`)}>просмотр</Button>
      </TableColSt>
    </TableRowSt>
  ));

  return (
    <TableSt>
      <TableHead colNames={colNames} />
      <TableBodySt>{tableRow}</TableBodySt>
    </TableSt>
  );
};

export default Table;
