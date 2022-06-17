import React, { useState } from 'react';
import Button from '../../components/Button';
import CreatePostModal from '../../components/CreatePostModal';
import Table from '../../components/Table';

import { forumList } from '../../mocks/data';

import { filterData } from '../../services/forum';

import { useToggle } from '../../hooks/useToggle';

import { WrapperSt, ButtonWrapperSt } from './style';

const adaptPosts = forumList.map(filterData);

const Forum = () => {
  const [isShown, toggleVisible] = useToggle(false);
  const [postList, setPostList] = useState(adaptPosts);
  const [post, setPost] = useState({ name: '', content: '' });

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

  return (
    <WrapperSt>
      <Table colNames={colNames} content={postList} />
      <ButtonWrapperSt>
        <Button onClick={toggleVisible}>создать пост</Button>
      </ButtonWrapperSt>

      <CreatePostModal
        isShown={isShown}
        toggleVisible={toggleVisible}
        headerText="Создание поста"
        handleAdd={handleAdd}
        handleChange={handleChange}
      />
    </WrapperSt>
  );
};

export default Forum;
