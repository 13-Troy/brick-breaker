import styled from 'styled-components';

interface AvatarProps {
  backgroundImage: string;
}

export const AvatarSt = styled.div<AvatarProps>`
  width: 130px;
  height: 130px;
  margin: 0 auto 30px;
  background-image: url(${({ backgroundImage }) =>
    backgroundImage
      ? `https://ya-praktikum.tech/api/v2/resources${backgroundImage}`
      : '/images/default_avatar.png'});
  background-size: cover;
  border-radius: 50%;
`;
