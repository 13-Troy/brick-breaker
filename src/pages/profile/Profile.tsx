import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

import { HardPopUpSt } from './style';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ first_name: '', id: '' });

  useEffect(() => {
    fetch(`https://ya-praktikum.tech/api/v2/auth/user`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setUser(data);
        console.log('test', data);
      });
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://ya-praktikum.tech/api/v2/auth/logout`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    }).then(() => {
      navigate(AppRoute.ROOT);
    });
  };

  return (
    <div>
      <HardPopUpSt>
        <Title h={4}>{user.first_name}</Title>
        <DataLine title={'Почта'} value={'pochta@yandex.ru'}></DataLine>
        <p>{user.first_name}</p>
        <p>{user.id}</p>
        <form onSubmit={onSubmit}>
          <Button fullWidth={false}>{'выход'}</Button>
        </form>
      </HardPopUpSt>
    </div>
  );
};

export default Profile;
