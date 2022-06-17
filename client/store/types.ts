export const USER = 'USER';

export interface User {
  first_name: string;
  second_name: string;
  email: string;
  login: string;
  phone: string;
  display_name: string;
  avatar: null | string;
}
