import React from 'react';
import Button, { ButtonType } from './Button';

export const AuthButtonType = () => {
  return (
    <div className="bg-blue-400 fixed h-10 w-10">
      <Button
        label="Auth"
        onClick={() => alert('Auth button clicked!22')}
        type={ButtonType.Auth}
      />
    </div>
  );
};

export default {
  component: Button,
  title: 'Button',
};
