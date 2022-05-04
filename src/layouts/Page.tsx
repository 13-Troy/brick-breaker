import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page
import Home from '../pages/home';
import About from '../pages/about';
import Registration from '../pages/registration';
import Profile from '../pages/profile';
import Forum from '../pages/forum';
import Post from '../pages/post';
import Records from '../pages/records';
import Game from '../pages/game';
import NotFound from '../pages/404';
import ServerError from '../pages/500';

// components
import NavTest from '../components/NavTest';

// constants
import { AppRoute, UrlSite } from '../services/const';

// style
import { GlobalStyle } from '../styles/style';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '../styles/variables';

const Page = () => {
  const [user, setUser] = useState({
    id: 0,
    email: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    login: '',
    avatar: '',
  });

  useEffect(() => {
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
        setUser(data);
      });
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavTest />
        <Routes>
          <Route path={AppRoute.ROOT} element={<Home userId={user.id} />} />
          <Route path={AppRoute.REGISTRATION} element={<Registration />} />
          {/* @todo */}
          {user.id && (
            <>
              <Route path={AppRoute.ABOUT} element={<About />} />
              <Route
                path={AppRoute.PROFILE}
                element={<Profile user={user} />}
              />
              <Route path={AppRoute.FORUM} element={<Forum />} />
              <Route path={`${AppRoute.FORUM}/:id`} element={<Post />} />
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
