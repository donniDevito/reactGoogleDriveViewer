import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton, LogoutButton } from '../AuthButtonComponents';
import Logo from '../../assets/logo';
import Button, { ButtonType } from '../ButtonComponent/Button';

const AppHeader = (): JSX.Element => {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      className="border-b-2 bg-gray-100 border-gray-500 pb-4 px-4 w-screen h-16
      flex flex-wrap justify-between items-center"
    >
      <Logo className=" h-8 w-auto" />
      <div className=" text-5xl h-16 text-ci-blue-500">Cloud Storage</div>
      <div className="flex items-center flex-no-wrap justify-between w-56">
        <Button
          label={'DE'}
          onClick={() => alert('Translation')}
          type={ButtonType.I18n}
        />
        <a className="text-ci-blue-500" href="">
          Contact
        </a>
        <div>
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
