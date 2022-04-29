import React from 'react';
import ButtonSettings from '../../components/ButtonSettings';
import Modal from '../../components/Modal';

import { useToggle } from '../../hooks/useToggle';

const Profile = () => {
  const [isShown, toggleVisible] = useToggle(false);
  const contentModalTest = <>{'Здесь контент'}</>;
  return (
    <>
      <ButtonSettings onClick={toggleVisible}>{'редактировать'}</ButtonSettings>
      <Modal
        isShown={isShown}
        hide={toggleVisible}
        headerText="Редактирование профиля"
      >
        {contentModalTest}
      </Modal>
    </>
  );
};

export default Profile;
