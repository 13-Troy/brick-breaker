import React from 'react';

import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Registration = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* @fixme remove later */ console.log(e.target.value);
  };

  return (
    <HardPopUpSt>
      <form action="">
        <Title h={2}>{'регистрация'}</Title>
        <Input
          name={'email'}
          type={'email'}
          placeholder={'почта'}
          onChange={handleChange}
        />
        <Input
          name={'login'}
          type={'text'}
          placeholder={'логин'}
          onChange={handleChange}
        />
        <Input
          name={'firstName'}
          type={'text'}
          placeholder={'имя'}
          onChange={handleChange}
        />
        <Link to={AppRoute.ROOT}>{'Войти'}</Link>
        <Button fullWidth>{'зарегистрироваться'}</Button>
      </form>
    </HardPopUpSt>
  );
};

export default Registration;
