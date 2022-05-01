import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';
import ButtonSettings from '../../components/ButtonSettings';
import Avatar from '../../components/Avatar';
import Modal from '../../components/Modal';
import Input from '../../components/Input';

import { AppRoute, UrlSite } from '../../services/const';
import { useToggle } from '../../hooks/useToggle';

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
  const [isShown, toggleVisible] = useToggle(false);
  const [changeProfile, setChangeProfile] = useState('');
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });

  const navigate = useNavigate();

  const onSend = () => {
    fetch(`${UrlSite.URL}/auth/logout`, {
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

  const changePassword = () => {
    if (password.newPassword === password.repeatNewPassword) {
      fetch(`${UrlSite.URL}/user/password`, {
        credentials: 'include',
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(password),
      }).then(() => {
        toggleVisible();
      });
    } else console.log('error');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (changeProfile === 'changePassword')
      setPassword((prevPassword) => ({ ...prevPassword, [name]: value }));
  };

  const onCallModal = (change: string) => {
    toggleVisible();
    setChangeProfile(change);
  };

  return (
    <div>
      <HardPopUpSt>
        <Avatar backgroundImage={user.avatar} size={130} />
        <Title h={4}>{user.first_name}</Title>
        <InfoSt>
          <DataLine title={'Почта'} value={user.email}></DataLine>
          <DataLine title={'Логин'} value={user.login}></DataLine>
          <DataLine title={'Имя'} value={user.first_name}></DataLine>
          <DataLine title={'Фамилия'} value={user.second_name}></DataLine>
          <DataLine title={'Ник'} value={user.display_name}></DataLine>
          <DataLine title={'Телефон'} value={user.phone}></DataLine>
        </InfoSt>
        <ButtonSettings onClick={() => onCallModal('changeData')}>
          {'Изменить данные'}
        </ButtonSettings>
        <ButtonSettings onClick={() => onCallModal('changePassword')}>
          {'Изменить пароль'}
        </ButtonSettings>
        <Modal isShown={isShown} hide={toggleVisible}>
          {changeProfile === 'changeData' && (
            <>
              <Title h={4}>{'изменить данные'}</Title>
              <Button fullWidth={false} onClick={changePassword}>
                {'сохранить'}
              </Button>
            </>
          )}
          {changeProfile === 'changePassword' && (
            <>
              <Title h={4}>{'изменить пароль'}</Title>
              <Input
                name={'oldPassword'}
                type={'password'}
                placeholder={'старый пароль'}
                onChange={handleChange}
              />
              <Input
                name={'newPassword'}
                type={'password'}
                placeholder={'новый пароль'}
                onChange={handleChange}
              />
              <Input
                name={'repeatNewPassword'}
                type={'password'}
                placeholder={'повторить пароль'}
                onChange={handleChange}
              />
              <Button fullWidth={false} onClick={changePassword}>
                {'сохранить'}
              </Button>
            </>
          )}
        </Modal>
        <Button fullWidth={false} onClick={onSend}>
          {'выход'}
        </Button>
      </HardPopUpSt>
    </div>
  );
};

export default Profile;
