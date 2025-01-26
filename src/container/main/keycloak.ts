import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react';
import { setToken } from '../../service/network';

const keycloak = new Keycloak({
  url: 'https://kc.bro-js.ru/',
  realm: 'open',
  clientId: 'kfu-m-24-1'
});

export interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  preferred_username: string;
  id: string;
}

export const useKeycloak = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const handle = async () => {
      setIsLoading(true);
      try {
        const authenticated = await keycloak.init({ onLoad: 'login-required' });
        if (authenticated) {
          // Решить проблему ниже, чтоб не было сомнений, что значение not undefined
          // @ts-ignore
          if (keycloak.token === undefined) {
            console.log('Token is undefined');
          } else {
            setToken(keycloak.token)
          }
          // setToken(keycloak.token);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { sub, ...user } = (await keycloak.loadUserInfo()) as any;
          console.log(user);
          setUser({ ...user, id: sub });
          console.log('User is authenticated');
        } else {
          console.log('User is not authenticated');
        }
      } catch (error) {
        console.error('Failed to initialize adapter:', error);
      } finally {
        setIsLoading(false);
      }
    };
    handle();
  }, []);

  return {
    isLoading,
    user
  };
};