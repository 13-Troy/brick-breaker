import React from 'react';

import Table from '../../components/Table';
import Button from '../../components/Button';
import { WrapperSt } from './style';

const colNames = ['Игрок', 'Очки'];

const postList = [
  {
    user_name: 'Иван',
    user_avatar:
      '/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png',
    score: '1000',
  },
  {
    user_name: 'Семен',
    user_avatar:
      '/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png',
    score: '1000',
  },
];

const Records = () => {
  const handleShowMore = () => {
    console.log('handleShowMore');
  };

  return (
    <WrapperSt>
      <Table colNames={colNames} content={postList} isShowBtn={false} />
      <Button onClick={handleShowMore}>показать еще </Button>
    </WrapperSt>
  );
};

export default Records;
