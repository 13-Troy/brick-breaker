import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { WrapperSt, HeaderSt, TextSt, PostBodySt, SettingsBlockSt, CommentAddBlockSt} from './style';
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
import { useNavigate } from 'react-router-dom';
import { deleteTopic } from '../../store/forum/actions';

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


  const handleDelete = (id: number) => {
    if (window.confirm("Вы действительно хотите удалить топик ?")) {
      dispatch(deleteTopic(id))
      navigate('/forum')
    }
  }

  const handleAddComments = () => {
    if (!post.comment) {
      console.log('заполите текст комментария')
    } else {
      const commentData = {
        commentText: post.comment,
        ownerId: user.id,
        ownerName: user.display_name,
        ownerAvatar: user.avatar,
        topicId: topic.topicId,
      }
      dispatch(addComment(topic.topicId, commentData))
      toggleVisibleField();
    }
  }
  const navigate = useNavigate();


  return (
    <WrapperSt>
      <HeaderSt>
        <Link to={AppRoute.FORUM}>к списку</Link>
        {
          user.id === topic.ownerId &&
          <SettingsBlockSt>
            <div onClick={() => handleDelete(topic.topicId)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div onClick={toggleVisible}> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.232 5.23202L18.768 8.76802M16.732 3.73202C17.2009 3.26312 17.8369 2.99969 18.5 2.99969C19.1631 2.99969 19.7991 3.26312 20.268 3.73202C20.7369 4.20093 21.0003 4.8369 21.0003 5.50002C21.0003 6.16315 20.7369 6.79912 20.268 7.26802L6.5 21.036H3V17.464L16.732 3.73202Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </SettingsBlockSt>
        }

      </HeaderSt>
      <PostBodySt>
        <Title h={2}> {topic.topicName}</Title>
        <TextSt>
          <Title h={4}>{topic.topicText}</Title>
        </TextSt>
      </PostBodySt>
      <Comments comments={commentsList} />

      <Button onClick={() => toggleVisibleField()}>оставить комментарий</Button>
      {isShownCommentField ?
        <CommentAddBlockSt>
          <Textarea
            name={'comment'}
            placeholder={'текст комментария'}
            onChange={handleChange}
          />
          <Button onClick={handleAddComments}>сохранить</Button>
        </CommentAddBlockSt>
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
