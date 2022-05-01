import styled from 'styled-components';

interface AvatarProps {
  backgroundImage: string;
  size: number;
}

const Avatar = styled.div<AvatarProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0 auto 30px;
  background-image: url(${({ backgroundImage }) =>
    backgroundImage
      ? `https://ya-praktikum.tech/api/v2/resources${backgroundImage}`
      : '/images/default_avatar.png'});
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export default Avatar;
