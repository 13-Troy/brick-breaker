import React, { FC, useState } from 'react';

import { AvatarSt } from './style';
import Input from '../Input';

interface AvatarProps {
  backgroundImage: string;
}

const Avatar: FC<AvatarProps> = ({ backgroundImage }) => {
  const [avatar, setAvatar] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('avatar', avatar);

    fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'application/json',
      },

      body: formData,
    }).then((data) => {
      console.log(data);
    });
  };

  const handleChange = (e: any) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <AvatarSt backgroundImage={backgroundImage}>
      <form onSubmit={onSubmit}>
        <Input
          name={'avatar'}
          type={'file'}
          placeholder={'file'}
          onChange={handleChange}
        />
        <button>test!</button>
      </form>
    </AvatarSt>
  );
};

export default Avatar;
