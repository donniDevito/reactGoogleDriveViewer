import React from 'react';
import { getUnpackedSettings } from 'http2';
import { AuthRole } from './App';
import cloudImage from '../../assets/images/cloud.jpg';

interface IAppContentProps {
  role: AuthRole;
}

const AppContent: React.FunctionComponent<IAppContentProps> = ({
  role,
}: IAppContentProps): JSX.Element => {
  switch (role) {
    case AuthRole.Guest:
      return (
        <div className="flex justify-center items-center h-full">
          <img className="object-cover w-full h-full" src={cloudImage} alt="" />
        </div>
      );
    case AuthRole.AuthUser:
      return <div className="flex flex-col bg-blue-500 py-4 px-20" />;
    case AuthRole.AuthAdmin:
      return <div className="flex flex-col bg-blue-500 py-4 px-20" />;
    default:
      return <></>;
  }
};

export default AppContent;
