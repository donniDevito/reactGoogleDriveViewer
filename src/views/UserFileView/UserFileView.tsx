import React from 'react';
import { generateFiles } from '../../helpers/utils';

export interface File {
  filename: string;
  created: Date;
  updated: Date;
}
export interface User {
  name: string;
  surname: string;
  email: string;
}

const UserFileView: React.FunctionComponent = () => {
  const files = generateFiles(30);

  return <div>USER FILE VIEW</div>;
};

export default UserFileView;
