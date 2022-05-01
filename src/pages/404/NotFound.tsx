import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { CenterSt, BigSt, SmallSt } from './style';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <CenterSt>
      <div>
        <BigSt>404 </BigSt>
        <SmallSt>упс, ошибка сервера</SmallSt>
      </div>
      <Button fullWidth={false} onClick={() => navigate(-1)}>
        {'назад'}
      </Button>
    </CenterSt>
  );
};

export default NotFound;
