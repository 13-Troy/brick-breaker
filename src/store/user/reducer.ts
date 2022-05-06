import { USER } from '../types';

const initialState = {
  user: {
    id: 0,
    email: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    login: '',
    avatar: '',
  },
};

export const testReducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
