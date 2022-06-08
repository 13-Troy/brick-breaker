import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { clearUser } from '../../store/reducers/user/actions';

function ProfilePage() {
  const user = useSelector<AppState, AppState['user']>(state => state.user);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearUser());
  };

  console.log('user',user);

  return (
    <>
      <h1>Profile page</h1>
      {user && (
        <div>
          Data:
          first_name: {user.first_name}<br />
        
          Email: {user.email}
          login: {user.login}
        </div>
      )}
      <button onClick={clear}>Clear</button>
      <Link to="/">Home</Link>
    </>
  )
}

export default ProfilePage;
