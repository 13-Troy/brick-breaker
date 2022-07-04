import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { WrapperSt, HeaderSt, TextSt, PostBodySt} from './style';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ChangePostModal from '../../components/ChangePostModal';
import Comments from '../../components/Comments';

import { AppRoute } from '../../services/const';


import { useToggle } from '../../hooks/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { getTopicById, addComment } from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';
import Textarea from '../../components/Textarea';


const Post = () => {
  const [isShownChangeModal, toggleVisible] = useToggle(false);
  const [isShownCommentField, toggleVisibleField] = useToggle(false);
  const [loaded, setLoaded] = useState(false)

  let { id } = useParams();

  const [state, setState] = useState({
    topicName: "",
    topicText: "",
    ownerId: ""
  })

  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const { topic } = useSelector((state: any) => state.forum)
  const user = useSelector((state: any) => state.user);

  const [post, setPost] = useState({ name: '', content: '', comment: '' });

  const commentsList = topic.comments;

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

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };


  const handleAddComments = () => {
    if (!post.comment) {
      console.log('заполите текст комментария')
    } else {
      const commentData = {
        commentText: post.comment,
        ownerId: user.id,
        topicId: topic.topicId,
      }
      dispatch(addComment(topic.topicId, commentData))
      toggleVisibleField();
    }
  }

  return (
    <WrapperSt>
      <HeaderSt>
        <Link to={AppRoute.FORUM}>к списку</Link>
        <div onClick={toggleVisible} >edit</div>
      </HeaderSt>
      <PostBodySt>
        <Title h={2}> {topic.topicName}</Title>
        <TextSt>
          {topic.topicText}
        </TextSt>
      </PostBodySt>
      <Comments comments={commentsList} />

      <Button onClick={() => toggleVisibleField()}>оставить комментарий</Button>
      {isShownCommentField ?
        <>
          <Textarea
            name={'comment'}
            placeholder={'текст комментария'}
            onChange={handleChange}
          />
          <Button onClick={handleAddComments}>сохранить</Button>
        </>
        : ""
      }

      <ChangePostModal
        isShown={isShownChangeModal}
        toggleVisible={toggleVisible}
        headerText="Редактирование топика"
      />
    </WrapperSt>
  );
};
export default Post;
