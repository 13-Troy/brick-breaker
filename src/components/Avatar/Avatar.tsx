import React from 'react';

interface AvatarProps {
  backgroundImage?: string | undefined;
  size?: number;
  role?: string;
  onClick?: () => void;
}

import { AvatarSt, AvatarImgSt } from './style';

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarSt
      size={props.size}
      onClick={props.onClick}
      className={props.onClick ? 'photo-edit' : ''}
    >
      <AvatarImgSt backgroundImage={props.backgroundImage} />
    </AvatarSt>
  );
};

export default Avatar;
