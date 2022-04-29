import React, { useState } from 'react';
import data from '../../mocks/data';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import { useModal } from '../../hooks/useModal';

import {
  WrapperSt,
  TableSt,
  TableHeadSt,
  TableBodySt,
  TableRowSt,
  TableColSt,
} from './style';

const Forum = () => {
  const { isShown, toggle } = useModal();
  const [postList, setPostList] = useState(data);

  const [logIn, setLogIn] = useState({ name: '', content: '' });

  const addTask = () => {
    const newPost = {
      id: postList.length + 1,
      content: logIn.content,
      name: logIn.name,
      user_id: 33,
      user_name: 'Семен',
      answer_count: 0,
    };

    setPostList([...postList, newPost]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addTask();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogIn((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const titles = ['Тема', 'Автор', 'Ответы', ''];

  const contentModalTest = (
    <>
      <Input
        name={'name'}
        type={'text'}
        placeholder={'название'}
        onChange={handleChange}
      />

      <Input
        name={'content'}
        type={'text'}
        placeholder={'текст поста'}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>{'сохранить'}</Button>
    </>
  );

  const tableHead = (
    <TableHeadSt>
      <TableRowSt>
        {postList &&
          titles.map((title, i) => <TableColSt key={i}>{title}</TableColSt>)}
      </TableRowSt>
    </TableHeadSt>
  );

  return (
    <>
      <WrapperSt>
        <TableSt>
          {tableHead}
          <TableBodySt>
            {postList &&
              postList.map((todo, i) => (
                <TableRowSt key={i}>
                  <TableColSt>{todo.name}</TableColSt>
                  <TableColSt>{todo.user_name}</TableColSt>
                  <TableColSt>{todo.answer_count}</TableColSt>
                  <TableColSt>edit</TableColSt>
                </TableRowSt>
              ))}
          </TableBodySt>
        </TableSt>

        <Button onClick={toggle}>{'редактировать'}</Button>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText="Редактирование профиля"
        >
          {contentModalTest}
        </Modal>
      </WrapperSt>
    </>
  );
};

export default Forum;
