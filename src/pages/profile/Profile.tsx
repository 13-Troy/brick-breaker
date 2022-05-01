import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../components/Title';
import DataLine from '../../components/DataLine';
import Button from '../../components/Button';
import ButtonSettings from '../../components/ButtonSettings';
import Avatar from '../../components/Avatar';
import Modal from '../../components/Modal';
import ChangeAvatarModal from '../../components/ChangeAvatarModal';
import ChangeProfileDataModal from '../../components/ChangeProfileDataModal';
import ChangePasswordModal from '../../components/ChangePasswordModal';

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

  const onCallModal = (change: string) => {
    toggleVisible();
    setChangeProfile(change);
  };

  return (
    <div>
      <HardPopUpSt>
        <Avatar
          backgroundImage={user.avatar}
          size={130}
          onClick={() => onCallModal('changeAvatar')}
        />
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
          {changeProfile === 'changeAvatar' && <ChangeAvatarModal />}
          {changeProfile === 'changeData' && (
            <ChangeProfileDataModal user={user} />
          )}
          {changeProfile === 'changePassword' && <ChangePasswordModal />}
        </Modal>
        <Button fullWidth={false} onClick={onSend}>
          {'выход'}
        </Button>
      </HardPopUpSt>
    </div>
  );
};

export default Profile;
