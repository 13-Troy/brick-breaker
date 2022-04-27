import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    fetch(`https://ya-praktikum.tech/api/v2/auth/user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then((data) => {
      console.log('test', data);
    });
    console.log('test');
  });

  return <div>Profile page</div>;
};

export default Profile;
