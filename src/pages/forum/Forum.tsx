import React, { useState, memo, useCallback } from 'react';
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

  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;

      setPost((prevPost) => ({ ...prevPost, [name]: value }));
    },
    []
  );

  const handleAdd = useCallback(() => {
    const newPost = {
      id: postList.length + 1,
      content: post.content,
      name: post.name,
      user_id: 33,
      user_name: 'Семен',
      answer_count: 0,
    };
    const adaptPosts = [...postList, newPost].map((post) => filterData(post));

    setPostList(adaptPosts);
    toggleVisible();
  }, [post, postList]);

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

export default memo(Forum);
