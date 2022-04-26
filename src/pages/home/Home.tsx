import React from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Home = () => {
  return (
    <>
      <HardPopUpSt>
        <form action="">
          <Title value={'вход'} h={2} />
          <Input />
          <Link
            value={'Нет аккаунта? Регистрация'}
            link={AppRoute.REGISTRATION}
          />
          <Button value={'вход'} fullWidth />
        </form>
      </HardPopUpSt>
    </>
  );
};

export default Home;
