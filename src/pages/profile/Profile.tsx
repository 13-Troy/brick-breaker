import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';

import { AppRoute } from '../../services/const';

import { HardPopUpSt, InfoSt } from './style';

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    test: '',
    email: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    login: '',
    avatar: '',
  });

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

  console.log(`https://ya-praktikum.tech/api/v2/resources${user.avatar}`);

  return (
    <div>
      <HardPopUpSt>
        <Avatar backgroundImage={user.avatar} />
        <Title h={4}>{user.first_name}</Title>
        <InfoSt>
          <DataLine title={'Почта'} value={user.email}></DataLine>
          <DataLine title={'Логин'} value={user.login}></DataLine>
          <DataLine title={'Имя'} value={user.first_name}></DataLine>
          <DataLine title={'Фамилия'} value={user.second_name}></DataLine>
          <DataLine title={'Ник'} value={user.display_name}></DataLine>
          <DataLine title={'Телефон'} value={user.phone}></DataLine>
        </InfoSt>
        <form onSubmit={onSubmit}>
          <Button fullWidth={false}>{'выход'}</Button>
        </form>
      </HardPopUpSt>
    </div>
  );
};

export default Profile;
