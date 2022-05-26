import React from 'react';

import Table from '../../components/Table';
import { WrapperSt } from './style';

const colNames = ['Игрок', 'Очки'];

const postList = [
  { name: 'Иван', score: '1000' },
  { name: 'Семен', score: '1000' },
];

const Records = () => {
  return (
    <WrapperSt>
      <Table colNames={colNames} content={postList} />
    </WrapperSt>
  );
};

export default Records;
