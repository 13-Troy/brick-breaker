import React from 'react';

import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Registration = () => {
  return (
    <>
      <HardPopUpSt>
        <form action="">
          <Title value={'регистрация'} h={2} />
          <Input />
          <Link value={'Войти'} link={AppRoute.ROOT} />
          <Button value={'зарегистрироваться'} fullWidth />
        </form>
      </HardPopUpSt>
    </>
  );
};

export default Registration;
