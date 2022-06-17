import { USER } from '../types';

const initialState = {
  id: 0,
  email: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
  login: '',
  avatar: '',
};

export const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return {
        ...payload,
      };

    default:
      return state;
  }
};
