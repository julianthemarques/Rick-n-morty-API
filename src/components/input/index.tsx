import React from 'react';
import { InputIconStyle, InputRootStyle } from './style';

const InputRoot = ({ children }: { children: React.ReactNode }) => {
  return <InputRootStyle>{children}</InputRootStyle>;
};

const InputInput = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};

const InputIcon = ({ children }: { children: React.ReactNode }) => {
  return <InputIconStyle>{children}</InputIconStyle>;
};

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};
