import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user/actions';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({
      first_name: 'johndoe',
      second_name: 'johndoe-tesr',
      email: 'johndoe@mail.com',
      login: 'testLogin',
      phone: '3444444',
      display_name: 'testLogin',
      
    }));
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <Link to="/profile">Profile</Link>
    </>
  )
}

export default HomePage;
