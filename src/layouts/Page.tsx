import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page
import Home from '../pages/home';
import About from '../pages/about';
import Registration from '../pages/registration';
import Profile from '../pages/profile';
import Forum from '../pages/forum';
import Records from '../pages/records';
import Game from '../pages/game';

// components
import NavTest from '../components/NavTest';

// constants
import { AppRoute } from '../services/const';

// style
import { GlobalStyle } from '../styles/style';

const Page = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavTest />
        <Routes>
          <Route path={AppRoute.ROOT} element={<Home />} />
          <Route path={AppRoute.ABOUT} element={<About />} />
          <Route path={AppRoute.REGISTRATION} element={<Registration />} />
          <Route path={AppRoute.PROFILE} element={<Profile />} />
          <Route path={AppRoute.FORUM} element={<Forum />} />
          <Route path={AppRoute.RECORDS} element={<Records />} />
          <Route path={AppRoute.GAME} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Page;
