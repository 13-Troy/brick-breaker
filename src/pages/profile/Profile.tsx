import React, { useEffect, useState } from 'react';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';

import { HardPopUpSt } from './style';

const Profile = () => {
  const [user, setUser] = useState({ first_name: 'tttt', id: 'yyy' });

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

  return (
    <div>
      <HardPopUpSt>
        <Title h={4}>{user.first_name}</Title>
        <DataLine title={'Почта'} value={'pochta@yandex.ru'}></DataLine>
        <p>{user.first_name}</p>
        <p>{user.id}</p>
        <Button fullWidth={false}>{'выход'}</Button>
      </HardPopUpSt>
    </div>
  );
};

export default Profile;
