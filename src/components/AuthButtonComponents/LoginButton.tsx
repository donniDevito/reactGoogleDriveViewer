import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Button, { ButtonType } from '../ButtonComponent/Button';

const LoginButton = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      label="Login"
      onClick={(): Promise<void> => loginWithRedirect()}
      type={ButtonType.Auth}
    />
  );
};

export default LoginButton;
