import React, {FC, useEffect, useState} from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

// page
import Home from '../pages/home';
import Oauth from '../pages/oauth';
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

import { baseTheme, darkTheme } from '../styles/variables';
import { useDispatch } from 'react-redux';
import { getProfile } from '../store/user/actions';
import { ThunkDispatch } from 'redux-thunk';
import Menu from '../components/Menu';
import ToggleTheme from '../components/ToggleTheme';

import { useToggle } from '../hooks/useToggle';

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
  // const user: boolean = localStorage.getItem('user') === 'true';
  const dispatch = useDispatch() as ThunkDispatch<any, any, any>;
  const [user, setUser] = useState(false);
  const [isBaseTheme, setTogglerTheme] = useToggle(true);


  const handleToggleTheme = () => {
    setTogglerTheme();
  };

  useEffect(() => {
    if (user) {
      dispatch(getProfile());
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined" && !user) {
      setUser(localStorage.getItem('user') === 'true')
    }
  }, []);

  return (
    <ThemeProvider theme=  {isBaseTheme ? baseTheme : darkTheme}>
      <GlobalStyle />
        <NavTest />
        <ToggleTheme onChange ={handleToggleTheme} value ={isBaseTheme} />
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
     </ThemeProvider>
  );
};

export default Page;
