import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Home = () => {
  const navigate = useNavigate();

  const [logIn, setLogIn] = useState({ login: '', password: '' });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://ya-praktikum.tech/api/v2/auth/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logIn),
    }).then((data) => {
      if (data.ok) navigate(AppRoute.PROFILE);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  return (
    <HardPopUpSt>
      <form onSubmit={onSubmit}>
        <Title h={2}>вход</Title>
        <Input
          name={'login'}
          type={'text'}
          placeholder={'логин'}
          onChange={handleChange}
        />
        <Input
          name={'password'}
          type={'password'}
          placeholder={'пароль'}
          onChange={handleChange}
        />
        <Link to={AppRoute.REGISTRATION}>{'Нет аккаунта? Регистрация'}</Link>
        <Button fullWidth>{'вход'}</Button>
      </form>
    </HardPopUpSt>
  );
};

export default Home;
