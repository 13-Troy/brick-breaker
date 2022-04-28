import React, { FC } from 'react';

import { AvatarSt } from './style';

interface AvatarProps {
  backgroundImage: string;
}

const Avatar: FC<AvatarProps> = ({ backgroundImage }) => {
  return <AvatarSt backgroundImage={backgroundImage} />;
};

export default Avatar;
