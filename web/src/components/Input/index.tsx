import React, { InputHTMLAttributes, useCallback } from 'react';

import { InputBlock } from './styles';
import { phone } from '../../utils/inputMask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  mask?: 'phone';
}

const Input: React.FC<InputProps> = ({ label, name, mask, ...rest }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'phone') phone(e);
    },
    [mask]
  );

  return (
    <InputBlock>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} onKeyUp={handleKeyUp} />
    </InputBlock>
  );
};

export default Input;
