import React, { Dispatch, FC, useEffect } from 'react';
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
import { connect } from 'react-redux';
import { userAction } from '../store/user/actions';

interface PageProps {
  userId?: number;
  _userAction?: any;
}

const Page: FC<PageProps> = ({ userId, _userAction }) => {
  useEffect(() => {
    _userAction();
  }, []);

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

const mapStateToProps = (store: any) => {
  return {
    testText: store.testReducer.testFromFunction,
    userId: store.testReducer.user.id,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    _userAction: () => dispatch(userAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
