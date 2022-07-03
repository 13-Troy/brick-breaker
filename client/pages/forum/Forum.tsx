import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import CreatePostModal from '../../components/CreatePostModal';
import Table from '../../components/Table';

import { forumList } from '../../mocks/data';

import { filterData } from '../../services/forum';

import { useToggle } from '../../hooks/useToggle';

import { WrapperSt, ButtonWrapperSt } from './style';

import { useDispatch, useSelector } from 'react-redux';
import { loadTopics, deleteTopic,addTopic} from '../../store/forum/actions';

const adaptPosts = forumList.map(filterData);

const Forum = () => {
  const [isShown, toggleVisible] = useToggle(false);
  const [postList, setPostList] = useState(adaptPosts);
  const [post, setPost] = useState({ name: '', content: '' });

  const { topics, topic, loading } = useSelector((state: any) => state.forum)

  const dispatch = useDispatch();

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return;
    dispatch(loadTopics())
    setLoaded(true)
  }, [loaded])

  const colNames = ['Название', 'Автор', 'Ответы', ''];

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleAdd = () => {
    if(! post.content || ! post.name) {
      console.log('заполите все поля')
    }

    const newPost = {
      id: postList.length + 1,
      content: post.content,
      name: post.name,
      user_id: 33,
      user_name: 'Семен',
      user_avatar:
        'https://ya-praktikum.tech/api/v2/resources/2722d38f-5f23-4fec-a538-5743e75f81ee/b41f82c7-9204-44b2-8fe1-b597493f0371_ava.png',
      answer_count: 0,
    };
    const adaptPosts = [...postList, newPost].map((post) => filterData(post));

    setPostList(adaptPosts);
    toggleVisible();
  };


  const handleDelete  = (id:number) => {
    if(window.confirm("Действительно хотите удалить топик ?")) {
      dispatch(deleteTopic(id))
  }
}

const handleTopicAdd  = (id:number) => {
  alert(1)
  if(! post.content || ! post.name) {
    console.log('заполите все поля')
  } else {
    const test = {
      topicName: post.name,
      topicText: post.content,
      ownerId: 33
    } 
      dispatch(addTopic(test))
      toggleVisible();
  }
}

  return (
    <WrapperSt>
  
      {topics && topics.map((item: any) => (
        <div>
          <div>
            {item.topicName}
          </div>

          <div>
            {item.topicText}
          </div>

      <ButtonWrapperSt>
        <Button onClick={() => handleDelete(item.topicId)}>удалить</Button>
      </ButtonWrapperSt>

        </div>
      ))}


      <Table colNames={colNames} content={postList} />
      <ButtonWrapperSt>
        <Button onClick={toggleVisible}>создать пост</Button>
      </ButtonWrapperSt>

      <CreatePostModal
        isShown={isShown}
        toggleVisible={toggleVisible}
        headerText="Создание поста"
        // handleAdd={handleAdd}
        handleAdd={handleTopicAdd}
        handleChange={handleChange}
      />
    </WrapperSt>
  );
};

export default Forum;
