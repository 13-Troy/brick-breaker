import React, { FC, InputHTMLAttributes } from 'react';

import { InputSt } from './style';

interface InputProps {
  type: string;
  idName: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, idName, placeholder, onChange }) => {
  return (
    <InputSt
      id={idName}
      name={idName}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
