import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Link from '../../components/Link';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Registration = () => {
  const navigate = useNavigate();

  const [logIn, setLogIn] = useState({ login: '', password: '' });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(logIn);

    navigate(AppRoute.REGISTRATION);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  return (
    <HardPopUpSt>
      <form onSubmit={onSubmit}>
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
        <Input
          name={'secondName'}
          type={'text'}
          placeholder={'фамилия'}
          onChange={handleChange}
        />
        <Input
          name={'phone'}
          type={'tel'}
          placeholder={'телефон'}
          onChange={handleChange}
        />
        <Input
          name={'password'}
          type={'password'}
          placeholder={'пароль'}
          onChange={handleChange}
        />
        <Input
          name={'passwordRepeat'}
          type={'password'}
          placeholder={'повторите пароль'}
          onChange={handleChange}
        />
        <Link to={AppRoute.ROOT}>{'Войти'}</Link>
        <Button fullWidth>{'зарегистрироваться'}</Button>
      </form>
    </HardPopUpSt>
  );
};

export default Registration;
