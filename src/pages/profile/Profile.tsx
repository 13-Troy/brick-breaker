import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';
import Avatar from '../../components/Avatar';

import { AppRoute } from '../../services/const';

import { HardPopUpSt, InfoSt } from './style';

interface ProfileProps {
  user: {
    avatar: string;
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
  };
}

const Profile: FC<ProfileProps> = ({ user }) => {
  const navigate = useNavigate();

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
      location.reload();
    });
  };

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
