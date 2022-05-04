import React from 'react';
import { useParams } from 'react-router-dom';
import { WrapperSt, HeaderSt, TextSt, PostBodySt } from './style';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';

const Post = () => {
  const params = useParams();
  return (
    <>
      <WrapperSt>
        <HeaderSt>
          <Link to={AppRoute.FORUM}>к списку</Link>
          <div>edit</div>
        </HeaderSt>
        <PostBodySt>
          <Title h={2}>Название поста {params.id}</Title>
          <TextSt>
            В честь пятилетия телеканала Матч ТВ объявлен национальный конкурс
            молодых спортивных комментаторов! Победитель получит право вслух и
            на всю страну переживать за спортивные баталии и станет частью
            команды Матч ТВ! В каждом эпизоде нашего подкаста удивительные
            нюансы из жизни спортивных комментаторов, отважные люди, которые
            захотели сменить профессию, чтобы стать частью...
          </TextSt>
        </PostBodySt>
        <Button>оставить комментарий</Button>
        <p>здесь список комментариев</p>
      </WrapperSt>
    </>
  );
};
export default Post;
