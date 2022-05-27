import styled from 'styled-components';

interface AvatarProps {
  size: number;
  role?: string;
}

interface ImgProps {
  backgroundImage: string | undefined;
}

export const AvatarSt = styled.div.attrs((props: AvatarProps) => ({
  size: props.size,
  role: 'button',
}))`
  background-repeat: no-repeat;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-size: cover;
  width: ${(props) => (props.size ? `${props.size}px` : '130px')};
  height: ${(props) => (props.size ? `${props.size}px` : '130px')};

  &.photo-edit {
    &::after {
      position: absolute;
      top: 0px;
      content: 'Поменять аватар';
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.allColors.black};
      opacity: 0;
      color: ${({ theme }) => theme.allColors.white};
      font-size: 13px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: opacity ${({ theme }) => theme.skillsStartAnim};
    }

    &:hover {
      &::after {
        opacity: 0.4;
      }
    }
  }
`;

export const AvatarImgSt = styled.img.attrs((props: ImgProps) => ({
  src: props.backgroundImage
    ? `https://ya-praktikum.tech/api/v2/resources${props.backgroundImage}`
    : '/images/default_avatar.png',
}))<ImgProps>`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;
