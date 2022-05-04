import React, { FC } from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

import {
  TableSt,
  TableHeadSt,
  TableBodySt,
  TableRowSt,
  TableColSt,
} from './style';

interface TableProps {
  colNames: Array<string>;
  content: Array<object>;
}

const Table: FC<TableProps> = ({ colNames, content }) => {
  const navigate = useNavigate();
  const tableHead = (
    <TableHeadSt>
      <TableRowSt>
        {colNames.map((headerItem, i) => (
          <TableColSt key={i}>{headerItem}</TableColSt>
        ))}
      </TableRowSt>
    </TableHeadSt>
  );
  return (
    <TableSt>
      {tableHead}
      <TableBodySt>
        {Object.values(content).map((obj, i) => (
          <TableRowSt key={i}>
            {Object.keys(obj)
              .filter((key) => key !== 'id')
              .map((key, index) => (
                <TableColSt key={index}>{obj[key]}</TableColSt>
              ))}
            <TableColSt>
              <Button onClick={() => navigate(`${content[i].id}`)}>
                просмотр
              </Button>
            </TableColSt>
          </TableRowSt>
        ))}
      </TableBodySt>
    </TableSt>
  );
};

export default Table;
