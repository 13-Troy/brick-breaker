import React, { useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';
import { WrapperSt, HeaderSt, TextSt, PostBodySt } from './style';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Button from '../../components/Button';

import { AppRoute } from '../../services/const';



import { useDispatch, useSelector } from 'react-redux';
import { getTopicById} from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';

const Post = () => {
  const params = useParams();

  let { id } = useParams();
  const [state, setState] = useState ({
    topicName: "",
    topicText: "",
    ownerId:  ""
  })

   const [loaded, setLoaded] = useState(false)
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  const {topic } = useSelector((state: any) => state.forum)



  useEffect(() => {
    if (loaded) return;
    dispatch(getTopicById(id))
    setLoaded(true)
  }, [loaded])


  useEffect(() => {
    if (topic) { 
      setState({ ...topic })
    }
  }, [topic])

  return (
    <WrapperSt>
      <HeaderSt>
        <Link to={AppRoute.FORUM}>к списку</Link>
        <div>edit</div>
      </HeaderSt>
      <PostBodySt>
        <Title h={2}> {topic.topicName}</Title>
        <TextSt>
        {topic.topicText}
        </TextSt>
      </PostBodySt>
      <Button>оставить комментарий</Button>
      <p>здесь список комментариев</p>
    </WrapperSt>
  );
};
export default Post;
