import { UrlSite } from '../services/const';

export type YaOauthPayload = {
  code: number;
  redirect_uri: string;
};

export const useOauth = () => {
  const getOathServiceId = async (redirect_uri: string) => {
    const response = await fetch(
      `${UrlSite.URL}/oauth/yandex/service-id?redirect_uri=${redirect_uri}`,
      {
        credentials: 'include',
        method: 'GET',
        headers: {
          'content-type': 'application-json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.reason}: ${response.status}`);
    }

    return data;
  };

  const getOauthCodeRedirect = (serviceId: string, redirect_uri: string) => {
    return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${redirect_uri}`;
  };

  const makeOauthSignInRequest = async (authData: YaOauthPayload) => {
    const response = await fetch(`${UrlSite.URL}/oauth/yandex`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'content-type': 'application-json',
      },
      body: JSON.stringify(authData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.reason}: ${response.status}`);
    }

    return data;
  };

  return {
    getOathServiceId,
    makeOauthSignInRequest,
    getOauthCodeRedirect,
  };
};
