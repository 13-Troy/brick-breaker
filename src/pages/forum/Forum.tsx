import React from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { useModal } from '../../hooks/useModal';

import {
  WrapperSt,
  TableSt,
  TableHeadSt,
  TableBodySt,
  TableRowSt,
  TableColSt,
  ButtonWrapperSt,
} from './style';

const Forum = () => {
  const { isShown, toggle } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* @fixme remove later */ console.log(e.target.value);
  };

  const contentModalTest = (
    <>
      <Input
        name={'namePost'}
        type={'text'}
        placeholder={'название поста'}
        onChange={handleChange}
      />

      <Textarea name={'post'} placeholder={'текст поста'} />
      <Button fullWidth>{'сохранить'}</Button>
    </>
  );
  return (
    <>
      <WrapperSt>
        <TableSt>
          <TableHeadSt>
            <TableColSt>Тема</TableColSt>
            <TableColSt>Автор</TableColSt>
            <TableColSt>Ответы</TableColSt>
            <TableColSt></TableColSt>
          </TableHeadSt>
          <TableBodySt>
            <TableRowSt>
              <TableColSt>правила</TableColSt>
              <TableColSt>Семен</TableColSt>
              <TableColSt>1</TableColSt>
              <TableColSt>edit</TableColSt>
            </TableRowSt>
            <TableRowSt>
              <TableColSt>правила</TableColSt>
              <TableColSt>Петрович</TableColSt>
              <TableColSt>22</TableColSt>
              <TableColSt>edit</TableColSt>
            </TableRowSt>
          </TableBodySt>
        </TableSt>
        <ButtonWrapperSt>
          <Button onClick={toggle}>{'создать пост'}</Button>
        </ButtonWrapperSt>
        <Modal isShown={isShown} hide={toggle} headerText="создание поста">
          {contentModalTest}
        </Modal>
      </WrapperSt>
    </>
  );
};

export default Forum;
