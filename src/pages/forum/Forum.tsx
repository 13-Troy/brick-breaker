import React, { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Table from '../../components/Table';

import { forumList } from '../../mocks/data';

import { useToggle } from '../../hooks/useToggle';

import { WrapperSt, ButtonWrapperSt } from './style';

const Forum = () => {
  forumList.map((forum) => delete forum.content);
  forumList.map((forum) => delete forum.user_id);

  const [isShown, toggleVisible] = useToggle(false);
  const [postList, setPostList] = useState(forumList);
  const [logIn, setLogIn] = useState({ name: '', content: '' });

  const addPost = () => {
    const newPost = {
      id: postList.length + 1,
      content: logIn.content,
      name: logIn.name,
      user_id: 33,
      user_name: 'Семен',
      answer_count: 0,
      answers: [],
    };

    setPostList([...postList, newPost]);
  };

  const handleSubmit = () => {
    addPost();
    toggleVisible();
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const colNames = ['Название', 'Автор', 'Ответы', ''];

  const contentModalTest = (
    <>
      <Input
        name={'name'}
        type={'text'}
        placeholder={'название'}
        onChange={handleChange}
      />
      <Textarea
        name={'content'}
        placeholder={'текст поста'}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>сохранить</Button>
    </>
  );

  return (
    <>
      <WrapperSt>
        <Table colNames={colNames} content={postList} />
        <ButtonWrapperSt>
          <Button onClick={toggleVisible}>создать пост</Button>
        </ButtonWrapperSt>

        <Modal
          isShown={isShown}
          hide={toggleVisible}
          headerText="Редактирование профиля"
        >
          {contentModalTest}
        </Modal>
      </WrapperSt>
    </>
  );
};

export default Forum;
