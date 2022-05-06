import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute, UrlSite } from '../../services/const';

import { HardPopUpSt } from './style';

interface HomeProps {
  userId?: number;
}

const Home: FC<HomeProps> = ({ userId }) => {
  const navigate = useNavigate();

  if (userId) navigate(AppRoute.PROFILE);

  const [logIn, setLogIn] = useState({ login: '', password: '' });

  const onSens = () => {
    fetch(`${UrlSite.URL}/auth/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logIn),
    }).then((data) => {
      if (data.ok) navigate(AppRoute.PROFILE);
      location.reload();
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  return (
    <HardPopUpSt>
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
      <Button fullWidth onClick={onSens}>
        {'вход'}
      </Button>
    </HardPopUpSt>
  );
};

export default Home;
