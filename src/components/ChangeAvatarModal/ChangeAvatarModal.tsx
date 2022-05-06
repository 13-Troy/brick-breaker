import React, { useState, ChangeEvent, Dispatch, FC } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';
import { connect } from 'react-redux';
import { changeAvatarAction } from '../../store/user/actions';

interface ChangeAvatarModalProps {
  _changeAvatarAction?: any;
}

const ChangeAvatarModal: FC<ChangeAvatarModalProps> = ({
  _changeAvatarAction,
}) => {
  const [avatar, setAvatar] = useState<File | null>(null);

  const changeAvatar = () => {
    if (!avatar) {
      return; // если аватара нет, то и менять нечего
    }

    const formData = new FormData();

    formData.append('avatar', avatar);

    _changeAvatarAction(formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      <Title h={4}>{'загрузите файл'}</Title>
      <Input
        name={'avatar'}
        type={'file'}
        placeholder={'file'}
        onChange={handleChange}
      />
      <Button fullWidth onClick={changeAvatar}>
        {'поменять'}
      </Button>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    _changeAvatarAction: (newAvatar: any) =>
      dispatch(changeAvatarAction(newAvatar)),
  };
};

export default connect(null, mapDispatchToProps)(ChangeAvatarModal);
