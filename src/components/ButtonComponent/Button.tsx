import React from 'react';

interface ButtonProps {
  label: string;
  type: ButtonType;
  onClick: () => void;
}
export enum ButtonType {
  Auth,
  I18n,
}

//<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
//  Button
//</button>

const defaultButtonStyle = 'py-2 px-4 border rounded m-8';
const Button: React.FC<ButtonProps> = ({
  label,
  type = ButtonType.Auth,
  onClick,
}: ButtonProps): JSX.Element => {
  let classNameDef = '';
  switch (type) {
    case ButtonType.Auth:
      classNameDef =
        defaultButtonStyle +
        'text-ci-blue-500 bg-ci-gold-500 hover:bg-ci-gold-700 border-ci-gold-700 font-bold';
      break;
    case ButtonType.I18n:
      classNameDef =
        defaultButtonStyle +
        'bg-cool-gray-400 hover:bg-cool-gray-700 border-cool-gray-700';
  }

  return (
    <button className={classNameDef} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
