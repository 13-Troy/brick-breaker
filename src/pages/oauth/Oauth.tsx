import React from 'react';

import ErrorPageTemplate from '../../components/ErrorPageTemplate';

const Oauth = () => {
  return (
    <ErrorPageTemplate
      noBtn
      title="Oauth авторизация"
      subtitle="Идет авторизация по Яндекс ID"
    />
  );
};

export default Oauth;
