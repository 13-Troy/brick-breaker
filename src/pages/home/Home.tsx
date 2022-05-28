import React, { useEffect, useState } from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Input from '../../components/Input';

import { AppRoute, UrlSite } from '../../services/const';

import { HardPopUpSt } from './style';
import { useOauth } from '../../hooks';
import { parseQueryParams } from '../../services';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [logIn, setLogIn] = useState({ login: '', password: '' });

  const location = useLocation();

  const { getOathServiceId, makeOauthSignInRequest, getOauthCodeRedirect } =
    useOauth();

  const handleOauthSignIn = async () => {
    const redirect_uri = window.location.origin;

    try {
      // const oAuthServiceData = await getOathServiceId(redirect_uri);
      // oAuthServiceData.service_id

      document.location.href = getOauthCodeRedirect(
        '40fc5f1e19dd4bd3bf52518444f9bec0',
        redirect_uri
      );
    } catch (e) {
      console.log('e', e);
    }
  };

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
      if (data.ok) {
        window.location.reload();
        localStorage.setItem('user', 'true');
      }
    });
  };

  useEffect(() => {
    const params = parseQueryParams<{ code: string }>(location.search);

    if ('code' in params) {
      const redirect_uri = window.location.origin;

      const getAppAccess = async () => {
        await makeOauthSignInRequest({ code: +params.code, redirect_uri });
      };

      getAppAccess().catch(console.error);
    }
  }, [location.search]);

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
      <div style={{ marginTop: '20px' }}>
        <Button fullWidth onClick={handleOauthSignIn}>
          Вход через Яндекс
        </Button>
      </div>
    </HardPopUpSt>
  );
};

export default Home;
