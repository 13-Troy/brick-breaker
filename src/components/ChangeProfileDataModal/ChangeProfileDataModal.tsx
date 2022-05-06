import React, { Dispatch, FC, useState } from 'react';

import Title from '../Title';
import Button from '../Button';
import Input from '../Input';

import { connect } from 'react-redux';
import { changeDataAction } from '../../store/user/actions';

interface ChangeProfileDataModalProps {
  user: {
    avatar: string;
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
  };
  _changeDataAction?: any;
}

const ChangeProfileDataModal: FC<ChangeProfileDataModalProps> = ({
  user,
  _changeDataAction,
}) => {
  const [data, setData] = useState({
    first_name: user.first_name,
    second_name: user.second_name,
    display_name: user.display_name,
    login: user.login,
    email: user.email,
    phone: user.phone,
  });

  const changeData = () => {
    _changeDataAction(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Title h={4}>{'изменить данные'}</Title>
      <Input
        name={'email'}
        type={'email'}
        placeholder={'почта'}
        onChange={handleChange}
        value={data.email}
      />
      <Input
        name={'login'}
        type={'text'}
        placeholder={'логин'}
        onChange={handleChange}
        value={data.login}
      />
      <Input
        name={'first_name'}
        type={'text'}
        placeholder={'имя'}
        onChange={handleChange}
        value={data.first_name}
      />
      <Input
        name={'second_name'}
        type={'text'}
        placeholder={'фамилия'}
        onChange={handleChange}
        value={data.second_name}
      />
      <Input
        name={'display_name'}
        type={'text'}
        placeholder={'ник'}
        onChange={handleChange}
        value={data.display_name ? data.display_name : ''}
      />
      <Input
        name={'phone'}
        type={'tel'}
        placeholder={'телефон'}
        onChange={handleChange}
        value={data.phone}
      />
      <Button fullWidth onClick={changeData}>
        {'сохранить'}
      </Button>
    </>
  );
};

const mapStateToProps = (store: any) => {
  return {
    user: store.testReducer.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    _changeDataAction: (newData: any) => dispatch(changeDataAction(newData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeProfileDataModal);
