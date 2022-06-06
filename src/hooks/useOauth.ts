import { HTTPTransport, parseQueryParams } from '../services';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type YaOauthPayload = {
  code: string;
  redirect_uri: string;
};

const api = new HTTPTransport({});

export const useOauth = (redirect_uri: string) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search.includes('code')) {
      const params = parseQueryParams<{ code: string }>(location.search);

      navigate(`/oauth?code=${params.code}`);
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
    return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}`;
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

      window.open(
        getOauthCodeRedirect(oAuthServiceData.service_id, redirect_uri),
        '_blank'
      );

      //TODO: then delete client_id:'40fc5f1e19dd4bd3bf52518444f9bec0'
    } catch (e) {
      console.log('error getting service id', e);
    }
  };

  return {
    handleOauthSignIn,
    makeOauthSignInRequest,
  };
};
