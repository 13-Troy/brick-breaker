import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import CreatePostModal from '../../components/CreatePostModal';
import Title from '../../components/Title';
import { WrapperSt, TopicBodySt, ButtonWrapperSt, ButtonInnerSt, RowSt} from './style';

import { useToggle } from '../../hooks/useToggle';

import { useDispatch, useSelector } from 'react-redux';
import { loadTopics, deleteTopic, addTopic } from '../../store/forum/actions';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';

const Forum = () => {
  const [loaded, setLoaded] = useState(false)
  const [isShown, toggleVisible] = useToggle(false);
  const [post, setPost] = useState({ name: '', content: '' });

  const { topics, loading } = useSelector((state: any) => state.forum)
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded) return;
    dispatch(loadTopics())
    setLoaded(true)
  }, [loaded])

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
    }
  }

  const handleTopicAdd = (id: number) => {
    if (!post.content || !post.name) {
      console.log('заполите все поля')
    } else {
      const test = {
        topicName: post.name,
        topicText: post.content,
        ownerId: user.id,
      }
      dispatch(addTopic(test))
      toggleVisible();
    }
  }

  if (loading) {
    return (
      <div>
        <Title h={3}>loading...</Title>
      </div>
    );
  }

  return (
    <WrapperSt>
      <ButtonWrapperSt>
        <Button onClick={toggleVisible}>создать пост</Button>
      </ButtonWrapperSt>

      {topics && topics.map((item: any) => (
        <TopicBodySt onClick={() => navigate(`post/${item.topicId}`)}>
          <Title h={3}> {item.topicName}</Title>
          <Title h={3}> {item.topicText}</Title>
          <RowSt>
            Автор id&nbsp;<Title h={4}> {item.ownerName}</Title>
          </RowSt>
          <RowSt>
            Ответов&nbsp;<Title h={4}> {item.comments.length}</Title>
          </RowSt>
          <RowSt>
            Создан&nbsp;<Title h={4}> {item.date}</Title>
          </RowSt>
          <ButtonInnerSt>
            <Button onClick={() => handleDelete(item.topicId)}>удалить</Button>
          </ButtonInnerSt>
        </TopicBodySt>
      ))}
      <CreatePostModal
        isShown={isShown}
        toggleVisible={toggleVisible}
        headerText="Создание топика"
        handleAdd={handleTopicAdd}
        handleChange={handleChange}
      />
    </WrapperSt>
  );
};

export default Forum;
