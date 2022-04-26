import React from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Home = () => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('test!');
    navigate(AppRoute.REGISTRATION);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HardPopUpSt>
        <form onSubmit={onSubmit}>
          <Title value={'вход'} h={2} />
          <Input
            idName={'login'}
            type={'text'}
            placeholder={'логин'}
            onChange={handleChange}
          />
          <Input
            idName={'password'}
            type={'password'}
            placeholder={'пароль'}
            onChange={handleChange}
          />
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
