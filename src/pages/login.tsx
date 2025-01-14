import { useCallback, useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import { ToastStatus, useToast } from 'src/components/dls/Toast/Toast';
import LoginContainer from 'src/components/Login/LoginContainer';
import AuthError from 'types/AuthError';

const LoginPage = () => {
  const toast = useToast();
  const { query, replace } = useRouter();
  const { t } = useTranslation('login');

  const getErrorMessage = useCallback(
    (errorId) => {
      if (errorId in AuthError) {
        return t(`login-error.${errorId}`);
      }
      return t(`login-error.${AuthError.AuthenticationError}`);
    },
    [t],
  );

  useEffect(() => {
    if (query.error) {
      const errorMessage = getErrorMessage(query.error);
      toast(errorMessage, {
        status: ToastStatus.Error,
      });
      replace('/login', null, { shallow: true });
    }
  }, [query.error, toast, replace, t, getErrorMessage]);

  return <LoginContainer />;
};

export default LoginPage;
