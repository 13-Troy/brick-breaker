import React from 'react';

import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Registration = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HardPopUpSt>
        <form action="">
          <Title value={'регистрация'} h={2} />
          <Input
            idName={'email'}
            type={'email'}
            placeholder={'почта'}
            onChange={handleChange}
          />
          <Link value={'Войти'} link={AppRoute.ROOT} />
          <Button value={'зарегистрироваться'} fullWidth />
        </form>
      </HardPopUpSt>
    </>
  );
};

export default Registration;
