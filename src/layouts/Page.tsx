import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page
import Home from '../pages/home';
import About from '../pages/about';
import Registration from '../pages/registration';
import Profile from '../pages/profile';
import Forum from '../pages/forum';
import Records from '../pages/records';
import Game from '../pages/game';
import NotFound from '../pages/404';
import ServerError from '../pages/500';

// components
import NavTest from '../components/NavTest';

// constants
import { AppRoute } from '../services/const';

// style
import { GlobalStyle } from '../styles/style';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '../styles/variables';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';

const Page = () => {
  const userId = useSelector((state: any) => state.userReducer.id);
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  useEffect(() => {
    dispatch(getProfile());
  });

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavTest />
        <Routes>
          <Route path={AppRoute.ROOT} element={<Home userId={userId} />} />
          <Route path={AppRoute.REGISTRATION} element={<Registration />} />
          {/* @todo */}
          {userId && (
            <>
              <Route path={AppRoute.ABOUT} element={<About />} />
              <Route path={AppRoute.PROFILE} element={<Profile />} />
              <Route path={AppRoute.FORUM} element={<Forum />} />
              <Route path={AppRoute.RECORDS} element={<Records />} />
              <Route path={AppRoute.GAME} element={<Game />} />
            </>
          )}
          <Route path={'*'} element={<NotFound />} />
          <Route path={'/500'} element={<ServerError />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Page;
