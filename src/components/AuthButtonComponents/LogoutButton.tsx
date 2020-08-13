import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';

const LogoutButton = (): JSX.Element => {
  const { logout } = useAuth0();

  return <PrimaryButton text="Logout" onClick={(): void => logout()} />;
};

export default LogoutButton;
