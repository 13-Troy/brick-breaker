import React from 'react';
import ButtonSettings from '../../components/ButtonSettings';
import Modal from '../../components/Modal';

import { useModal } from '../../hooks/useModal';

const Profile = () => {
  const { isShown, toggle } = useModal();
  const contentModalTest = <>{'Здесь контент'}</>;
  return (
    <>
      <ButtonSettings onClick={toggle}>{'редактировать'}</ButtonSettings>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Редактирование профиля"
      >
        {contentModalTest}
      </Modal>
    </>
  );
};

export default Profile;
