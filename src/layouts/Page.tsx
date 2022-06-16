import React, { FC, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

// page
import Home from '../pages/home';
import Oauth from '../pages/Oauth';
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
import { AppRoute } from '../services/const';

// style
import { GlobalStyle } from '../styles/style';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '../styles/variables';
import { useDispatch } from 'react-redux';
import { getProfile } from '../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import Menu from '../components/Menu';

interface ProtectedStartRouteProps {
  user: boolean;
  redirectPath?: any;
}

const ProtectedStartRouteProps: FC<ProtectedStartRouteProps> = ({
  user,
  redirectPath = AppRoute.PROFILE,
}) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

interface ProtectedRouteProps {
  user: boolean;
  redirectPath?: any;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  user,
  redirectPath = AppRoute.ROOT,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

const Page = () => {
  const user: boolean = localStorage.getItem('user') === 'true';
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;

  useEffect(() => {
    if (user) dispatch(getProfile());
  });

  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavTest />
        <Routes>
          <Route element={<ProtectedStartRouteProps user={user} />}>
            <Route path={AppRoute.ROOT} element={<Home />} />
            <Route path={AppRoute.OAUTH} element={<Oauth />} />
            <Route path={AppRoute.REGISTRATION} element={<Registration />} />
          </Route>

          <Route
            element={
              <>
                <Menu />
                <ProtectedRoute user={user} />
              </>
            }
          >
            <Route path={AppRoute.PROFILE} element={<Profile />} />
            <Route path={AppRoute.FORUM} element={<Forum />} />
            <Route path={AppRoute.ABOUT} element={<About />} />
            <Route path={`${AppRoute.FORUM}/post/:id`} element={<Post />} />
            <Route path={AppRoute.RECORDS} element={<Records />} />
            <Route path={AppRoute.GAME} element={<Game />} />
          </Route>

          <Route path={'*'} element={<NotFound />} />
          <Route path={'/500'} element={<ServerError />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Page;
