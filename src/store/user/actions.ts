import { Dispatch } from 'react';

import { USER } from '../types';
import { UrlSite } from '../../services/const';

export const getProfile = () => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${UrlSite.URL}/auth/user`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({
          type: USER,
          payload: data,
        });
      });
  };
};

export const updateProfileData = (newData: any) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`${UrlSite.URL}/user/profile`, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({
          type: USER,
          payload: data,
        });
      });
  };
};

export const updateProfileAvatar = (newAvatar: any) => {
  return (dispatch: Dispatch<any>) => {
    fetch(`https://ya-praktikum.tech/api/v2/user/profile/avatar`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        accept: 'application/json',
      },
      body: newAvatar,
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        dispatch({
          type: USER,
          payload: data,
        });
      });
  };
};
