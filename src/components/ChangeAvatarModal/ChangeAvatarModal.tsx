import React, { useState, ChangeEvent } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';

const ChangeAvatarModal = () => {
  const [avatar, setAvatar] = useState<File | null>(null);

  const changeAvatar = () => {
    if (!avatar) {
      return; // если аватара нет, то и менять нечего
    }

    const formData = new FormData();

    formData.append('avatar', avatar);

    fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        accept: 'application/json',
      },
      body: formData,
    }).then(() => {
      location.reload();
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <Title h={4}>{'загрузите файл'}</Title>
      <Input
        name={'avatar'}
        type={'file'}
        placeholder={'file'}
        onChange={handleChange}
      />
      <Button fullWidth onClick={changeAvatar}>
        {'поменять'}
      </Button>
    </>
  );
};

export default ChangeAvatarModal;
