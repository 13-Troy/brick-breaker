import React, { FC } from 'react';

import Modal from '../Modal';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

interface ModalProps {
  isShown?: boolean;
  toggleVisible?: () => void;
  headerText?: string;
  handleAdd?: () => void;
  handleChange?: any;
}

const EditProfileModal: FC<ModalProps> = ({
  isShown,
  toggleVisible,
  headerText,
  handleAdd,
  handleChange,
}) => {
  if (!isShown) {
    return null;
  }

  return (
    <Modal isShown={isShown} hide={toggleVisible} headerText={headerText}>
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
      <Button onClick={handleAdd}>сохранить</Button>
    </Modal>
  );
};
export default EditProfileModal;
