import { HTTPTransport, parseQueryParams } from '../services';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type YaOauthPayload = {
  code: string;
  redirect_uri: string;
};

const api = new HTTPTransport({});

export const useOauth = (redirect_uri: string) => {
  const location = useLocation();

  useEffect(() => {
    if (location.search.includes('code')) {
      const params = parseQueryParams<{ code: string }>(location.search);

      const getAppAccess = async () => {
        await makeOauthSignInRequest({ code: params.code, redirect_uri });
      };

      getAppAccess().catch(console.error);
    }
  }, [location.search, redirect_uri]);

  const getOathServiceId = async <T>(redirect_uri: string) => {
    return api.get<T>('/oauth/yandex/service-id', {
      queryParams: {
        redirect_uri,
      },
    });
  };

  const getOauthCodeRedirect = (serviceId: string, redirect_uri: string) => {
    return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${redirect_uri}`;
  };

  const makeOauthSignInRequest = async (authData: YaOauthPayload) => {
    return api.post('/oauth/yandex', {
      body: authData,
    });
  };

  const handleOauthSignIn = async (redirect_uri: string) => {
    try {
      const oAuthServiceData = await getOathServiceId<{ service_id: string }>(
        redirect_uri
      );

      document.location.href = getOauthCodeRedirect(
        oAuthServiceData.service_id,
        redirect_uri
      );

      //TODO: then delete client_id:'40fc5f1e19dd4bd3bf52518444f9bec0'
    } catch (e) {
      console.log('error getting service id', e);
    }
  };

  return {
    handleOauthSignIn,
  };
};